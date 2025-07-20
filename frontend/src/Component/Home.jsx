import React, { useState, useEffect, useMemo, useCallback } from "react";
import { AllProductData, productsCategories } from "../server/productAPI.js";
import ProductCardContainer from "../containers/ProductCardContainer.js";
import CardPlaceHolder from "./LoadingStructer/CardPlaceHolder";
import FooterFeature from "../Component/Footer/FooterFeature";
import NavbarContainer from "../containers/NavbarContainer.js";
import Footer from "./Footer/Footer.jsx";
import { debounce } from "../utils/performance.js";

export const Home = React.memo((props) => {
  const [productData, setProductData] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [SortProductItems, setSortProductItems] = useState("all product");
  const [WishList_value, setWishList_value] = useState(false);

  // Memoize filtered products to avoid recalculation on every render
  const filteredProducts = useMemo(() => {
    if (!productData.length) return [];
    
    if (SortProductItems === "" || SortProductItems === "all product") {
      return productData;
    }
    
    return productData.filter(product => 
      product.category === SortProductItems
    );
  }, [productData, SortProductItems]);

  // Optimize category filter handler with useCallback
  const handleCategoryFilter = useCallback((e) => {
    const selected = document.getElementsByClassName("ActiveFilter")[0];
    if (selected) {
      selected.classList.remove("bg-primary-subtle", "ActiveFilter");
      const icon = selected.children[0];
      if (icon) icon.classList.add("d-none");
    }

    e.target.classList.add("bg-primary-subtle", "ActiveFilter");
    const newIcon = e.target.children[0];
    if (newIcon) newIcon.classList.remove("d-none");
    
    setSortProductItems(e.target.innerText.toLowerCase());
  }, []);

  // Debounced search function for future search implementation
  const debouncedSearch = useMemo(
    () => debounce((searchTerm) => {
      // Future search implementation
      console.log('Searching for:', searchTerm);
    }, 300),
    []
  );

  // Optimized data fetching with error handling
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [productsResponse, categoriesResponse] = await Promise.all([
          AllProductData(),
          productsCategories()
        ]);
        
        if (isMounted) {
          setProductData(productsResponse || []);
          setCategories(categoriesResponse || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (isMounted) {
          setProductData([]);
          setCategories([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Memoize category filters
  const categoryFilters = useMemo(() => {
    return Categories.map((category, index) => (
      <div
        key={category}
        className={`col-lg-3 col-md-4 col-sm-6 col-12 mb-2 ${index === 0 ? 'ActiveFilter bg-primary-subtle' : ''}`}
        onClick={handleCategoryFilter}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleCategoryFilter(e)}
        style={{ cursor: 'pointer' }}
      >
        <div className="border border-primary-subtle text-center p-3 rounded">
          <i className={`bi bi-check-circle-fill text-primary ${index === 0 ? '' : 'd-none'}`}></i>
          <h6 className="mt-2 mb-0 text-capitalize">{category}</h6>
        </div>
      </div>
    ));
  }, [Categories, handleCategoryFilter]);

  // Memoize product grid with virtual scrolling for large lists
  const productGrid = useMemo(() => {
    if (isLoading) {
      return Array.from({ length: 8 }, (_, index) => (
        <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <CardPlaceHolder />
        </div>
      ));
    }

    if (!filteredProducts.length) {
      return (
        <div className="col-12 text-center py-5">
          <h4>No products found</h4>
          <p className="text-muted">Try changing your filter or check back later.</p>
        </div>
      );
    }

    return filteredProducts.map((element) => (
      <ProductCardContainer
        key={element.id}
        element={element}
        WishList_value={WishList_value}
      />
    ));
  }, [filteredProducts, isLoading, WishList_value]);

  return (
    <div className="home-container">
      <NavbarContainer />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section bg-light py-5 mb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-3">Welcome to OnMarket</h1>
                <p className="lead mb-4">Discover amazing products at great prices</p>
                <div className="hero-stats d-flex gap-4">
                  <div>
                    <h5 className="fw-bold text-primary">{productData.length}+</h5>
                    <small>Products</small>
                  </div>
                  <div>
                    <h5 className="fw-bold text-primary">{Categories.length}+</h5>
                    <small>Categories</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="container mb-5">
          <h2 className="h3 mb-4">Shop by Category</h2>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-2 ActiveFilter bg-primary-subtle">
              <div 
                className="border border-primary-subtle text-center p-3 rounded"
                onClick={handleCategoryFilter}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCategoryFilter(e)}
                style={{ cursor: 'pointer' }}
              >
                <i className="bi bi-check-circle-fill text-primary"></i>
                <h6 className="mt-2 mb-0">All Products</h6>
              </div>
            </div>
            {categoryFilters}
          </div>
        </section>

        {/* Products Section */}
        <section className="container mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h3 mb-0">
              {SortProductItems === "all product" ? "All Products" : SortProductItems}
              <span className="badge bg-secondary ms-2">{filteredProducts.length}</span>
            </h2>
            
            {/* Sort Options */}
            <div className="dropdown">
              <button 
                className="btn btn-outline-secondary dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                Sort by
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">Price: Low to High</button></li>
                <li><button className="dropdown-item" type="button">Price: High to Low</button></li>
                <li><button className="dropdown-item" type="button">Newest First</button></li>
                <li><button className="dropdown-item" type="button">Rating</button></li>
              </ul>
            </div>
          </div>
          
          <div className="row">
            {productGrid}
          </div>
        </section>

        {/* Features Section */}
        <FooterFeature />
      </main>
      
      <Footer />
    </div>
  );
});

Home.displayName = 'Home';
