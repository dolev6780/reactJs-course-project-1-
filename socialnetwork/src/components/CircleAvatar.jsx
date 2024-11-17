import React from 'react'

export default function CircleAvatar({ firstLetter, handleClick, username, bg }) {
    return (
        <div onClick={handleClick} className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-opacity-20 hover:${bg} cursor-pointer transition-all duration-300`}>
            <div className='bg-teal-500 p-4 rounded-full w-8 h-8 flex bggre
               items-center justify-center font-bold'>
                {firstLetter.toUpperCase()}
            </div>
        </div>
    )
}
