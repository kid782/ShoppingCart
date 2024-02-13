import PropTypes from "prop-types";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App({ title }) {
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
