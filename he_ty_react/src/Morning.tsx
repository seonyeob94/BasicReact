import { useState } from 'react'

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
