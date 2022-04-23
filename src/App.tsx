import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header title='Header' backgroundColor='red'/>
      <main>
        <div className='landing-page'>
          <img src={require("./images/main-bg.jpg")} alt="" className='main-bg-image'/>
        </div>
      </main>
    </div>
  )
}

export default App