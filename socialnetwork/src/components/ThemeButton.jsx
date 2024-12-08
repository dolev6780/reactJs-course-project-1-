import React from "react";
import { useTheme } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className={` w-12 h-6 flex items-center justify-between rounded-full cursor-pointer transition-all duration-100 relative ${theme === "light" ? "bg-gray-200" : "bg-neutral-800"}`}
    >
      <div
        className={`absolute w-6  rounded-full transition-all duration-100 ${
          theme === "light" ? "left-1 " : "left-6 "
        }`}
      >
        {theme === "light" ? (
          <CiLight className="text-xl text-black " />
        ) : (
          <CiDark className="text-xl text-white " />
        )}
      </div>
    </div>
  );
}
