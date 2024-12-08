import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logosn.png";
import CircleAvatar from "./CircleAvatar";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { useTheme } from "../context/ThemeContext";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const user = auth?.currentUser;
  const { theme, toggleTheme } = useTheme();
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (user) {
      setName(user?.email);
    }
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setName("");
        navigate("/signin");
        setIsMenuOpen(!isMenuOpen);
      })
      .catch((err) => {
        console.error("Error signing out:", err);
      });
  };
  const goToProfile = () => {
    navigate(`/profile/${user.uid}`);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`flex items-center justify-between px-2 bg-blue-700 shadow-lg relative ${
        theme === "light" ? "text-black" : "text-white"
      }`}
    >
      {/* Left: Logo */}
      <div className="flex items-center justify-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="w-16 h-16 p-2" src={logo} alt="Logo" />
        </div>
        <div className="relative left-4">
          <ThemeButton />
        </div>
      </div>
      {/* Middle: Title */}
      <div>
        <h1 className="text-2xl font-serif">Social Network</h1>
      </div>

      {/* Right: Avatar and Tooltip */}
      <div className="relative">
        <CircleAvatar handleClick={handleMenu} bg="bg-blue-400" />
      </div>

      {/* Menu */}
      <div
        className={`absolute right-1 top-[4.2rem] bg-blue-400 grid justify-center items-center w-40 py-2 rounded-md shadow-md ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Avatar */}
        <div className="m-auto">
          <CircleAvatar bg="bg-blue-700" handleClick={goToProfile} />
        </div>
        {/* Email */}
        <h1>{user?.email || "Guest"}</h1>
        <hr className="h-0.5 w-36" />

        {/* Buttons */}
        <div className="grid">
          <button className="bg-white mt-2 w-1/2 m-auto rounded-md py-1 text-blue-700 hover:bg-opacity-80">
            Settings
          </button>
          {user ? (
            <button
              onClick={handleSignOut}
              className="bg-white mt-2 w-1/2 m-auto rounded-md py-1 text-blue-700 hover:bg-opacity-80"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/signin");
                setIsMenuOpen(!isMenuOpen);
              }}
              className="bg-white mt-2 w-1/2 m-auto rounded-md py-1 text-blue-700 hover:bg-opacity-80"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
