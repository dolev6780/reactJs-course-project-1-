import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // check if inputs are empty
    if (username === "" || password === "" || email === "" || gender === "") {
      alert("must enter all details");
      return;
    }
    // validate username and password
    if (email.length >= 4 && password.length >= 6) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const flag = handleCreateUser(user);
          if (flag) {
            navigate("/");
          } else {
            alert("Error creating user");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      alert("username or password are invalid");
    }
  };
  const handleCreateUser = async (user) => {
    try {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await setDoc(docRef, {
          userName: username,
          email: email,
          gender: gender,
          age: age,
          uid: user.uid,
        });
        console.log("User created successfully.");
        return true;
      } else {
        console.error("No user found.");
        return false;
      }
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
  };

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
          <input
            type="number"
            min={6}
            max={99}
            placeholder="Age"
            onChange={(e) => {
              setAge(e.target.value);
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
