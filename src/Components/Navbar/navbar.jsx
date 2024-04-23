import "./navbar.css";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          TechEd
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navBarTop"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse heading-nav" id="navBarTop">
          <div className="navbar-nav">
            <Link className="blogs-route nav-item nav-link">COURSES</Link>
            <Link className="blogs-route nav-item nav-link">LIVE CLASSES</Link>
            <Link className="blogs-route nav-item nav-link">PRACTISE</Link>
            <Link className="blogs-route nav-item nav-link">RESOURCE</Link>
            <Link className="blogs-route nav-item nav-link">OUR PRODUCTS</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navBar;
