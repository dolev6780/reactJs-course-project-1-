import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const handleSignUp = async () => {
    if (username === "" || password === "" || email === "" || gender === "") {
      alert("must enter all details");
      return;
    }

    if (username.length >= 4 && password.length >= 6) {
      setUserDetails({
        username: username,
        password: password,
        email: email,
        gender: gender,
      });
      if(userDetails != null){
        navigateToSignIn();
      }
    } else {
      alert("username or password are invalid");
    }
  };
  const navigateToSignIn = ()=>{
    if(userDetails != null)
      console.log(userDetails)
     localStorage.setItem('user', JSON.stringify(userDetails));
    navigate('/signin');
  }
  return (
    <div className="grid justify-center items-center w-full h-screen">
      <div className="border border-blue-700 grid gap-4 px-6 rounded-xl py-10 h-[70vh] shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 ">
          The Social Network
        </h1>
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <div className="grid justify-center gap-y-2">
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
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border-2 border-blue-700 px-2 rounded-full transition-all placeholder:text-black h-10"
          />
          <select
            className="border-2 border-blue-700 px-2 rounded-full transition-all placeholder:text-black h-10"
            name=""
            id=""
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button
            className="m-auto rounded-full text-white font-semibold px-4 py-1 hover:scale-110 transition-all duration-300 active:scale-90 shadow-md shadow-blue-400 theme_color "
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </div>
        <p className="font-semibold">
          Already registered?{" "}
          <Link to={"/signin"}>
            <span className="text-blue-700 cursor-pointer hover:font-bold hover:underline">
              Sign in
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
