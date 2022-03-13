import { Route, Routes, Navigate, Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Error from "./components/Error/Error";
import Home from "./components/News/Home";
import Post from "./components/News/Post";
import AddNews from "./components/News/AddNews";
import UserProfile from "./components/News/UserProfile";

function App() {
  const user = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <>
      {user ? (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/post" className="nav-link">
                    Add Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addnews" className="nav-link disabled">
                    AddNews
                  </Link>
                </li>
              </ul>
              <NavLink
                // to="/login"
                // className={classes.logout}
                to="/"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
              {/* <button
                className="float-right bt btn-primary"
                onClick={handleLogout}
              >
                Logout
              </button> */}
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/addnews" element={<AddNews />} />
            <Route path="/Userprofile" element={<UserProfile />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
