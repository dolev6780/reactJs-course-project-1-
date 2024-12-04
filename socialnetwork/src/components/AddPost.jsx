import React, { useEffect, useState } from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
export default function AddPost({setModalIsOpen}) {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [user, setUser]= useState("");
    useEffect(()=>{
        const checkAuthChange =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user?.email);
            } else {
                setUser(undefined);
            }
          });
    // Cleanup the checkAuthChange when the component unmounts
    return ()=> checkAuthChange();
    },[]);
    const handleCreatePost = async () =>{
        try {
            if(user){
            const docRef = await addDoc(collection(db, "posts"), {
              postTitle: postTitle,
              postContent: postContent,
              creator: user
            });
            console.log("Document written with ID: ", docRef.id);
            setModalIsOpen(false);            
        }
        else{
            console.error("no user");
        }
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

  return (
    <div className='w-full h-full px-10 py-6'>
        <h1 className='text-2xl'>Create new post</h1>
        <input onChange={(e)=>{setPostTitle(e.target.value)}} type="text" className='border border-black p-2 rounded-md my-2' placeholder='add post title'/>
        <input onChange={(e)=>{setPostContent(e.target.value)}} type="text" className='border border-black p-2 rounded-md my-2' placeholder='add post content'/>
       <div>
        <button onClick={handleCreatePost} className='border bg-blue-700 px-4 py-1 rounded-md text-white'>Create post</button>
       </div>
    </div>
  )
}
