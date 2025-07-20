import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { getAllProducts } from '../../gql/Query';
import { TogglePublishStatus, BulkPublishProducts } from '../../gql/mutation';
import '../../css/AdminDashboard.css';

export default function AdminDashboard() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all'); // all, published, unpublished
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title'); // title, price, publishedAt, createdAt

  // GraphQL queries and mutations
  const { data, loading, error, refetch } = useQuery(getAllProducts);
  const [togglePublishMutation] = useMutation(TogglePublishStatus);
  const [bulkPublishMutation] = useMutation(BulkPublishProducts);

  const products = data?.getAllProducts || [];

  const handleSelectProduct = (productId) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAll = () => {
    const filteredProducts = getFilteredProducts();
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map(p => p._id));
    }
  };

  const handleTogglePublish = async (productId, currentStatus) => {
    try {
      await togglePublishMutation({
        variables: {
          productId,
          published: !currentStatus
        }
      });
      
      // Refetch the data to update the UI
      await refetch();
      
      toast.success(
        `Product ${!currentStatus ? 'published' : 'unpublished'} successfully!`,
        { position: "bottom-right" }
      );
    } catch (error) {
      toast.error('Failed to update publish status', { position: "bottom-right" });
      console.error('Toggle publish error:', error);
    }
  };

  const handleBulkPublish = async (publishStatus) => {
    if (selectedProducts.length === 0) {
      toast.warning('Please select products to update', { position: "bottom-right" });
      return;
    }

    try {
      const result = await bulkPublishMutation({
        variables: {
          productIds: selectedProducts,
          published: publishStatus
        }
      });
      
      // Refetch the data to update the UI
      await refetch();
      setSelectedProducts([]);
      
      if (result.data?.bulkPublishProducts?.success) {
        toast.success(
          result.data.bulkPublishProducts.message,
          { position: "bottom-right" }
        );
      } else {
        toast.error(
          result.data?.bulkPublishProducts?.message || 'Failed to update products',
          { position: "bottom-right" }
        );
      }
    } catch (error) {
      toast.error('Failed to bulk update products', { position: "bottom-right" });
      console.error('Bulk publish error:', error);
    }
  };

  const getFilteredProducts = () => {
    let filtered = products;

    // Filter by publish status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(product => 
        filterStatus === 'published' ? product.published : !product.published
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'price':
          return a.price - b.price;
        case 'publishedAt':
          if (!a.publishedAt && !b.publishedAt) return 0;
          if (!a.publishedAt) return 1;
          if (!b.publishedAt) return -1;
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case 'createdAt':
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });

    return filtered;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStats = () => {
    const total = products.length;
    const published = products.filter(p => p.published).length;
    const unpublished = total - published;
    return { total, published, unpublished };
  };

  const stats = getStats();
  const filteredProducts = getFilteredProducts();

  if (loading) {
    return (
      <div className="admin-dashboard">
        <div className="loading-container">
          <h2>Loading products...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-dashboard">
        <div className="error-container">
          <h2>Error loading products</h2>
          <p>{error.message}</p>
          <button onClick={() => refetch()} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Publish Management Dashboard</h1>
        <div className="stats-overview">
          <div className="stat-card">
            <h3>{stats.total}</h3>
            <p>Total Products</p>
          </div>
          <div className="stat-card published">
            <h3>{stats.published}</h3>
            <p>Published</p>
          </div>
          <div className="stat-card unpublished">
            <h3>{stats.unpublished}</h3>
            <p>Unpublished</p>
          </div>
        </div>
      </div>

      <div className="dashboard-controls">
        <div className="search-filter-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-controls">
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Products</option>
              <option value="published">Published Only</option>
              <option value="unpublished">Unpublished Only</option>
            </select>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="title">Sort by Title</option>
              <option value="price">Sort by Price</option>
              <option value="publishedAt">Sort by Publish Date</option>
              <option value="createdAt">Sort by Created Date</option>
            </select>
          </div>
        </div>

        <div className="bulk-actions">
          <button 
            onClick={handleSelectAll}
            className="select-all-btn"
          >
            {selectedProducts.length === filteredProducts.length ? 'Deselect All' : 'Select All'}
          </button>
          
          {selectedProducts.length > 0 && (
            <div className="bulk-action-buttons">
              <button 
                onClick={() => handleBulkPublish(true)}
                className="bulk-publish-btn"
              >
                Publish Selected ({selectedProducts.length})
              </button>
              <button 
                onClick={() => handleBulkPublish(false)}
                className="bulk-unpublish-btn"
              >
                Unpublish Selected ({selectedProducts.length})
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedProducts.length === filteredProducts.length && filteredProducts.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Published Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product._id} className={selectedProducts.includes(product._id) ? 'selected' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product._id)}
                    onChange={() => handleSelectProduct(product._id)}
                  />
                </td>
                <td>
                  <div className="product-info">
                    <div className="product-image">
                      <img src={`/images/${product.image[0]}`} alt={product.title} />
                    </div>
                    <div className="product-details">
                      <h4>{product.title}</h4>
                      <p>{product.description.substring(0, 50)}...</p>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  <div className="rating">
                    ⭐ {product.rating.rate} ({product.rating.count})
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${product.published ? 'published' : 'unpublished'}`}>
                    {product.published ? 'Published' : 'Unpublished'}
                  </span>
                </td>
                <td>{formatDate(product.publishedAt)}</td>
                <td>
                  <button
                    onClick={() => handleTogglePublish(product._id, product.published)}
                    className={`action-btn ${product.published ? 'unpublish' : 'publish'}`}
                  >
                    {product.published ? 'Unpublish' : 'Publish'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}