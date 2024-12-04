import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { db } from '../firebase';

export default function Profile() {
  const { userId } = useParams();
  const [profile, setProfile] = useState();
  useEffect(()=>{
    const getUserData = async ()=>{
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfile(data);
      } else {
        console.log("No such document!");
      }
    }
    getUserData();
  
  },[userId])

  return (
    <div >
      <p>{profile?.userName}</p>
      <p>{profile?.email}</p>
      <p>{profile?.age}</p>
    </div>
  )
}
