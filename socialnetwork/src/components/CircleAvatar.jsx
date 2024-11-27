import React, { useEffect, useState } from 'react'
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';
export default function CircleAvatar({ handleClick, bg }) {
    const [name, setName]= useState("");
    useEffect(()=>{
        const checkAuthChange =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setName(user?.email);
           
            } else {
             setName("?");
            }
          });
    // Cleanup the checkAuthChange when the component unmounts
    return ()=> checkAuthChange();
    },[]);
   
    return (
        <div onClick={handleClick} className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-opacity-20 hover:${bg} cursor-pointer transition-all duration-300`}>
            <div className='bg-teal-500 p-4 rounded-full w-8 h-8 flex bggre
               items-center justify-center font-bold'>
                {name.charAt(0)?.toUpperCase()}
            </div>
        </div>
    )
}
