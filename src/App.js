import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/News/Home";
import Post from "./components/News/Post";
import AddNews from "./components/News/AddNews";
import UserProfile from "./components/News/UserProfile";
import VisitorUser from "./components/Visitor/VisitorUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<VisitorUser />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" element={<Navigate replace to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
