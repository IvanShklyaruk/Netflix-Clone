import { useEffect } from "react";
import Home from "../pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Player from "../pages/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/NetflixClonePage.css";

const NetflixClonePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/Netflix-Clone/");
      } else {
        console.log("Logged Out");
        navigate("/Netflix-Clone/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/Netflix-Clone/" element={<Home />} />
        <Route path="/Netflix-Clone/login" element={<Login />} />
        <Route path="/Netflix-Clone/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default NetflixClonePage;
