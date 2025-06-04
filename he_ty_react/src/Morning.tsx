import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Morning() {
  const [msg, setMsg] = useState("Good Morning")

    const myclick =() =>{

      setMsg("Good Evening")

    }

  return (
    <>
        <input type="text" value={msg} onChange={(e) => setMsg(e.target.value)} />
        <button onClick={myclick}>click</button>

       
    </>
  )
}

export default Morning
