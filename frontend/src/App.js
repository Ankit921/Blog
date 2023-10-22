import { Routes,Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/login/Login.js";
import Home from "./pages/home/Home.js";
import Register from "./pages/register/Register.js";
import Create from "./pages/create/Create.js";
import BlogDetails from "./pages/blogDetails/BlogDetails.js";
import UpdateBlog from "./pages/updateBlog/UpdateBlog.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/updateBlog/:id" element={<UpdateBlog />} />
      </Routes>
    </div>
  );
}

export default App;
