import { useState } from 'react'

import './App.css'

function App() {
  let [colour, setColour] = useState("olive")    
  return (
      <div
        className="flex items-end justify-center w-screen h-screen duration-200"
          style={{backgroundColor: colour}}         
      >
        <div className="flex w-min rounded-full bg-white my-10" >

          <button className=" flex  mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-yellow-500 w-20 "
            onClick={() => {
              setColour("yellow")
            }}
          >Yellow</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-green-900 w-20 " 
          onClick={() => {
              setColour("green")
            }}
            >Green</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-slate-600 w-20 " onClick={() => {
              setColour("#475569")
            }}>Slate</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-blue-600 w-20 " onClick={() => {
              setColour("#2563eb")
            }}
            >Blue</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-amber-800 w-20 " onClick={() => {
              setColour("#92400e")
            }}
            >Amber</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-emerald-400 w-20 " onClick={() => {
              setColour("#34d399")
            }}
            >Emerald</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-purple-800 w-20 " 
          onClick={() => {       
              setColour("#6b21a8")
              }}
            >Purple</button>
          <button className=" mx-2 my-2 rounded-full text-center px-2 text-wrap text-white bg-pink-700 w-20 " 
          onClick={() => {
              setColour("#be185d")
            }}
            >Pink</button>
        </div>
      </div>
  )
}

export default App
