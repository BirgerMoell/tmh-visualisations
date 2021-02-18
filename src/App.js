
import React, { useState } from "react";
import  styled, {css} from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import spectogram from "./Spectrogram-19thC.png"
import tmh from "./tmh.png"
import './App.css';
import { Fruit } from "./Fruit"
import ulme from "./ulme.jpeg"
import anna from "./anna.jpeg"
import Birger from "./birger/App"
import Ulme from "./ulme/App"



export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App-container">
        <nav className="Nav-bar">
     
        <Link to="/"><img className="logo" width="100px" height="100px" src={logo}></img></Link>
  
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="about">About</Link>
            </div>
            <div>
              <Link to="ulme">Ulme</Link>
            </div>
            <div>
              <Link to="anna">Anna</Link>
            </div>
            <div>
              <Link to="birger">Birger</Link>
            </div>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/ulme">
            <Ulme />
          </Route>
          <Route path="/anna">
            <Anna />
          </Route>
          <Route path="/birger">
            <Birger />
          </Route>
          <Route path="/">
            <Front />
          </Route>
        </Switch>

        <Footer></Footer>

      </div>
    </Router>
  );
}

function Footer(props) {
  return (
    <div className="Footer-container">

      <img className="logo" width="300px" src={tmh}></img>
      <p>Tal Musik Hörsel 2020 ©</p>
    </div>
  )
}


function Front(props) {
  return (
    <div className="Front-container">

      <h1>Speech Music and Hearing</h1>

      <div>
      <p>The department of speech music and hearing is really cool.</p>
      </div>

      <img width="400px" height="400px" src={spectogram}></img>
      <p>This is a spectogram, a visual representation of a sound.</p>

      <p><Link to="/birger">Birger</Link> does research on speech and Alzheimer</p>

      <p> <Link to="/ulme">Ulme</Link> does research on transformers</p>

      <p> <Link to="/anna">Anna</Link> does research on face animation</p>

    </div>
  )
}


function Home(props) {

  const [speed, setSpeed] = useState(0.2);

  const changeSpeed = (change) => {
    if (speed + change > 0.0001) {
      setSpeed(speed + change)
    } else {
      setSpeed(0.0001)
    }
    
    console.log("the speed is", speed)
  }

  let awesome = true
  let value = "hello everyone"
  let person = props.person

  let imgSource = props.imgSource
  console.log("img source", imgSource)


  return (
    <div className="App">
      <header className="App-header">

        { imgSource ? <Rotating src={imgSource} className="App-logo" speed={speed} />  : null}
        {/* { imgSource ? <img src={imgSource} className="App-logo" alt="logo" />  : null} */}
        <p>
          { person }
        </p>

        <Fruit whateverIwant="Iwantcandy" className="App-header" value="banan"/>

        <h1>Build Amazing Things!</h1>
        <h2>We are very professional</h2>

        <Button onClick={() => changeSpeed(0.05)} type="primary" value="Faster"></Button>
        <Button onClick={() => changeSpeed(-0.05)} type="secondary" value="Slower"></Button>
  
      </header>
    </div>
  );
}

const Rotating = styled.img`

${props => props.speed && css`
    animation: App-logo-spin infinite ${1/props.speed}s linear; 
  `}

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`


function Button(props) {

  return (
  <button onClick={props.onClick} className={`button ${props.type}`}>{props.value}</button> )
}

function About() {
  return <h2>This is a cool about page</h2>;
}

// function Ulme() {
//   return <Home imgSource={ulme} person="Ulme"></Home>
// }

function Anna() {
  return  <Home imgSource={anna} person="Anna"></Home>
}

// function Birger() {
//   return  <Home imgSource={birger} person="Birger"></Home>
// }