import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin panel. You have successfully logged in.</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Available Features:</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Link 
            to="/admin/publish" 
            style={{
              display: 'inline-block',
              padding: '15px 25px',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
          >
            📊 Publish Management Dashboard
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>Publish Management Features:</h3>
        <ul style={{ marginTop: '10px' }}>
          <li>View all products with publish status</li>
          <li>Toggle publish status for individual products</li>
          <li>Bulk publish/unpublish multiple products</li>
          <li>Filter products by publish status</li>
          <li>Search products by title, category, or description</li>
          <li>Sort products by various criteria</li>
          <li>Real-time statistics dashboard</li>
        </ul>
      </div>
    </div>
  )
}
