import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Routes } from './tools/router-config';


const App = () => {
  return (
    <Router>
      <div className="content">
        <Link to="/"><div className="icon" /></Link>
        <Routes />
      </div>
    </Router>
  )
}

export default App