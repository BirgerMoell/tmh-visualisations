
import React, { useState } from "react";
import  styled, {css} from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { Fruit } from "./Fruit"
import ulme from "./ulme.jpeg"
import anna from "./anna.jpeg"
import birger from "./birger2.jpeg"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/ulme">Ulme</Link>
            </li>
            <li>
              <Link to="/anna">Anna</Link>
            </li>
            <li>
              <Link to="/birger">Birger</Link>
            </li>
          </ul>
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
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

function Ulme() {
  return <Home imgSource={ulme} person="Ulme"></Home>
}

function Anna() {
  return  <Home imgSource={anna} person="Anna"></Home>
}

function Birger() {
  return  <Home imgSource={birger} person="Birger"></Home>
}