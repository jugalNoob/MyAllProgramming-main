import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>

      <Link to="/">Home</Link>
      <br />
      <br />
      <Link to="/rand">RandName</Link>
      <br />
      <Link to="/form">form</Link>
      <br />
      <Link to="/cry">cryptoHash</Link>
      <br />
      <Link to="/if">ifelse all</Link>
    </div>
  )
}

export default Home