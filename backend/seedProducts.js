import mongoose from 'mongoose';
import Product from './Model/Product.js';

// Sample products data
const sampleProducts = [
  {
    id: 'prod001',
    title: 'iPhone 15 Pro',
    price: 999,
    description: 'Latest iPhone with Pro features and titanium design',
    category: 'Electronics',
    image: ['iphone15pro.jpg'],
    rating: { rate: 4.8, count: 256 },
    published: true,
    publishedAt: new Date('2024-01-15'),
    createdAt: new Date('2024-01-10')
  },
  {
    id: 'prod002',
    title: 'MacBook Air M3',
    price: 1299,
    description: 'Ultra-thin laptop with M3 chip for professional work',
    category: 'Electronics',
    image: ['macbook_air_m3.jpg'],
    rating: { rate: 4.7, count: 189 },
    published: false,
    publishedAt: null,
    createdAt: new Date('2024-01-12')
  },
  {
    id: 'prod003',
    title: 'Nike Air Max 270',
    price: 150,
    description: 'Comfortable running shoes with air cushioning',
    category: 'Sports',
    image: ['nike_air_max_270.jpg'],
    rating: { rate: 4.5, count: 342 },
    published: true,
    publishedAt: new Date('2024-01-18'),
    createdAt: new Date('2024-01-16')
  },
  {
    id: 'prod004',
    title: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    description: 'Premium Android smartphone with S Pen',
    category: 'Electronics',
    image: ['samsung_s24_ultra.jpg'],
    rating: { rate: 4.6, count: 198 },
    published: false,
    publishedAt: null,
    createdAt: new Date('2024-01-14')
  },
  {
    id: 'prod005',
    title: 'Sony WH-1000XM5',
    price: 399,
    description: 'Industry-leading noise canceling headphones',
    category: 'Electronics',
    image: ['sony_wh1000xm5.jpg'],
    rating: { rate: 4.9, count: 567 },
    published: true,
    publishedAt: new Date('2024-01-20'),
    createdAt: new Date('2024-01-17')
  },
  {
    id: 'prod006',
    title: 'Adidas Ultraboost 22',
    price: 180,
    description: 'High-performance running shoes with Boost cushioning',
    category: 'Sports',
    image: ['adidas_ultraboost_22.jpg'],
    rating: { rate: 4.4, count: 276 },
    published: false,
    publishedAt: null,
    createdAt: new Date('2024-01-19')
  },
  {
    id: 'prod007',
    title: 'Levi\'s 501 Jeans',
    price: 89,
    description: 'Classic straight-leg jeans in vintage blue',
    category: 'Clothing',
    image: ['levis_501_jeans.jpg'],
    rating: { rate: 4.3, count: 423 },
    published: true,
    publishedAt: new Date('2024-01-22'),
    createdAt: new Date('2024-01-20')
  },
  {
    id: 'prod008',
    title: 'iPad Air (5th Gen)',
    price: 599,
    description: 'Powerful tablet with M1 chip for creativity and productivity',
    category: 'Electronics',
    image: ['ipad_air_5th_gen.jpg'],
    rating: { rate: 4.7, count: 234 },
    published: false,
    publishedAt: null,
    createdAt: new Date('2024-01-21')
  }
];

async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/your_database_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${insertedProducts.length} sample products`);

    console.log('Sample products:');
    insertedProducts.forEach(product => {
      console.log(`- ${product.title} (${product.published ? 'Published' : 'Unpublished'})`);
    });

  } catch (error) {
    console.error('Error seeding products:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seeding function
seedProducts();