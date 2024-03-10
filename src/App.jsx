import React from 'react';
import About from "./About"
import "./App.css"
import img1 from "./img1.jpg"


const App = () => {
  return <div className="App">
    <h1>Hello, React!</h1>
    <About />
    <img src={img1} alt="img1" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, a!</p>
  </div>
}

export default App;