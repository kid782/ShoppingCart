import PropTypes from "prop-types";
import Navigation from "./components/Navigation";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App({ title }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
  }, []);
  return (
    <>
      <Navigation />
      <Link to="test">To test</Link>
      <Link to="/">Go back</Link>
      <h1>{title}</h1>
      <Outlet />
    </>
  );
}

export default App;

App.propTypes = {
  title: PropTypes.string,
};
