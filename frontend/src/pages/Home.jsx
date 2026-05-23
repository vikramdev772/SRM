import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <div className='container'>
      <Card  first="apple" second="🍏"/>
      <Card  first="pizza" second="🍕"/>
      <Card  first="fruit" second="🍑" />
     
    </div>
    </div>
  )
}

export default Home
