import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const handleSignIn = () => {
    if (username === "" || password === "") {
      alert("must enter all details");
      return;
    }

    if (username.toLowerCase() === user.username && password === user.password) {
     navigate('/')
    } else {
      alert("username or password are invalid");
    }
  };

  return (
    <div className="grid justify-center items-center w-full h-screen">
      <div className="border border-blue-700 grid gap-4 px-6 rounded-xl py-10 h-[70vh]">
        <h1 className="text-4xl font-bold text-blue-600 ">
          The Social Network
        </h1>
        <h1 className="text-2xl font-bold">Sign In</h1>
        <div className="grid justify-center ">
          <input
            type="text"
            placeholder="User Name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="border-2 border-blue-700 px-2 rounded-full transition-all placeholder:text-black h-10"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 border-blue-700 px-2 rounded-full transition-all placeholder:text-black focus:border-blue-700 h-10"
          />
          <button
            className="m-auto rounded-full text-white font-semibold px-4 py-1 hover:scale-110 transition-all duration-300 active:scale-90 shadow-md shadow-blue-400 theme_color "
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </div>
        <p className="font-semibold">
          Not Registred yet?{" "}
          <span
            onClick={() => {
              navigate("/signup");
            }}
            className="text-blue-700 cursor-pointer hover:font-bold hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
