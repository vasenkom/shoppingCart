// import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import main from "./assets/2_1.jpg";
import styles from "./HomePage.module.css";

function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForProducts = async () => {
      try {
        const productsData = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        setData(productsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForProducts();
  }, []);

  return (
    <>
      <img src={main} alt="waves" className={styles.mainIMG} />
    </>
  );
}

export default HomePage;
