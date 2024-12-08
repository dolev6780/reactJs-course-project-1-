import React, { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import AddPostButton from "../components/AddPostButton";
import { db } from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Posts from "./Posts";
import { useTheme } from "../context/ThemeContext";
export default function Home({data}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const {theme, toggleTheme} = useTheme();
  const fetchPosts = async () => {
    try {
      const postsCollection = collection(db, "posts");
      const unsubscribe = onSnapshot(postsCollection, (querySnapshot) => {
        const postList = [];
        querySnapshot.forEach((doc) => {
          postList.push(doc.data());
        });
        setPosts(postList);
      });
      // const postSnapshot = await getDocs(postsCollection);
      // const postList = postSnapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   ...doc.data(),
      // }));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div className={`h-screen w-full ${theme === "light" ? "bg-white text-black" : "bg-neutral-800 text-white"} transition-all duration-100`}>
      <Posts data={data}/>
      {/* <AddPostButton setModalIsOpen={setModalIsOpen} />
      <div
        className={`border w-96 m-auto border-black rounded-lg h-64 mt-64 ${
          modalIsOpen ? "" : "hidden"
        }`}
      >
        <AddPost setModalIsOpen={setModalIsOpen} />
      </div>
      <div>
        {posts.map((post, i) => {
          return (
            <div key={i}>
              <h1>{post.postTitle}</h1>
              <p>{post.postContent}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
