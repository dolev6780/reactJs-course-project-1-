import React from "react";
import { IoMdAdd } from "react-icons/io";

export default function AddPostButton({setModalIsOpen}) {
  return (
    <div>
      <button onClick={()=>{setModalIsOpen(true)}} className="bg-blue-700 p-1 rounded-full text-white shadow-xl absolute bottom-4 right-4 hover:scale-110 hover:bottom-6 transition-all">
        <IoMdAdd fontSize={36} />
      </button>
    </div>
  );
}
