import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      home
      <Link to={"/counter"}>COunter</Link>

    </div>
  )
}

export default Home