import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductGrid from '../components/ProductGrid';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="products-page">
        <Sidebar />
        <ProductGrid products={products} />
      </div>
      <Footer />
    </>
  );
};

export default Products;
