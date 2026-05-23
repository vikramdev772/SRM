import React, { useState } from 'react'

function Dashboard() {
    console.log("\n\t Fruit 🍏")

    let [v ,setV]=useState("🍑");

  return (
    <div>
      <h2>learning state </h2>
      <br />
      <h3>Fruits</h3>
      <h1>{v}</h1>
    <button onClick={()=>{
        setV("🍏");
    }}>change</button>
    </div>
  )
}

export default Dashboard
