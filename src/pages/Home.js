import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductGrid from "../components/ProductGrid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RotatingTriangles from "react-loader-spinner"; // If you installed react-loader-spinner
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setIsLoading(false); // Set loading to false after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Set loading to false if there's an error
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        {isLoading ? (
          <div className="loader-container">
            {/* Use a spinner from react-loader-spinner */}
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="rotating-triangles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
