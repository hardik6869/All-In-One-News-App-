// import { Link } from "react-router-dom";
// import Home from "../News/Home";
// import Post from "../News/Post";
// import AddNews from "../News/AddNews";
// import UserProfile from "../News/UserProfile";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Link to="/home" className="navbar-brand">
//           Home
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <Link to="/post" className="nav-link">
//                 Add Post
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/profile" className="nav-link">
//                 profile
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="addnews" className="nav-link disabled">
//                 AddNews
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/post" element={<Post />} />
//         <Route path="/addnews" element={<AddNews />} />
//         <Route path="/userprofile" element={<UserProfile />} />
//       </Routes>

//       <button className="float-right bt btn-primary" onClick={handleLogout}>
//         Logout
//       </button>
//     </>
//   );
// };

// export default Main;
