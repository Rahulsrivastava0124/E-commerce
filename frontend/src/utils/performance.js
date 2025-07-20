// Performance utility functions

// Debounce function to limit API calls
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading intersection observer
export const createLazyLoader = () => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  return {
    observe: (img) => imageObserver.observe(img),
    disconnect: () => imageObserver.disconnect()
  };
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

// Memory usage monitoring
export const logMemoryUsage = () => {
  if (performance.memory) {
    const memInfo = performance.memory;
    console.log({
      usedJSHeapSize: `${(memInfo.usedJSHeapSize / 1048576).toFixed(2)} MB`,
      totalJSHeapSize: `${(memInfo.totalJSHeapSize / 1048576).toFixed(2)} MB`,
      jsHeapSizeLimit: `${(memInfo.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
    });
  }
};

// Cache implementation
export class SimpleCache {
  constructor(maxSize = 100, ttl = 300000) { // 5 minutes default TTL
    this.cache = new Map();
    this.maxSize = maxSize;
    this.ttl = ttl;
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      value,
      expiry: Date.now() + this.ttl
    });
  }

  clear() {
    this.cache.clear();
  }

  size() {
    return this.cache.size;
  }
}

// Image optimization helpers
export const optimizeImageUrl = (url, width = 300, quality = 80) => {
  // This is a placeholder - in a real app, you'd use a service like Cloudinary
  if (url.includes('fakestoreapi.com')) {
    return url; // API images are already optimized
  }
  return url;
};

// Bundle splitting helper
export const loadComponent = (importFn) => {
  return React.lazy(() => 
    importFn().then(module => ({
      default: module.default || module
    }))
  );
};

// Error boundary helper
export const withErrorBoundary = (Component, fallback) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return fallback || <div>Something went wrong.</div>;
      }
      return <Component {...this.props} />;
    }
  };
};

// Resource preloader
export const preloadResources = (resources) => {
  resources.forEach(({ url, as, type }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    if (as) link.as = as;
    if (type) link.type = type;
    document.head.appendChild(link);
  });
};

// Web Vitals reporting
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};