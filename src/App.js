import './App.css';
import About from './components/About';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [modeLabel, setmodeLabel] = useState('Enable darkmode')

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setmode('dark')
      setmodeLabel('Enable lightmode');
      document.body.style.backgroundColor = '#2b037c'
      showAlert("The darkmode has been enabled", "success")
      // setInterval(() => {
      //   document.title = "TextUtils - is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }
    else{
      setmode('light')
      setmodeLabel('Enable darkmode');
      document.body.style.backgroundColor = 'white'
      showAlert("The lightmode has been enabled", "success")

    }
  }

  return (
    <>
      <Router>
        <Navbar title="UPWALLSTREET" about="About" mode={mode} modeLabel={modeLabel} toggleMode = {toggleMode} />
        <Alert alert = {alert}/>
        <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Form mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
      </Router>
      
    </> 
    );
}

export default App;
