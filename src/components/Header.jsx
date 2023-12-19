import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Header = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("user");
    context.setUser(null);
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={(obj) =>
                  obj.isActive ? "nav-link active" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            {context.user && (
              <li className="nav-item">
                <NavLink
                  to="/posts"
                  className={(obj) =>
                    obj.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Posts
                </NavLink>
              </li>
            )}
            {!context.user && (
              <li className="nav-item">
                <NavLink
                  className={(obj) =>
                    obj.isActive ? "nav-link active" : "nav-link"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
            {context.user && (
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
