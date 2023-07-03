import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [textMode, setTextMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [myStyle, setMyStyle] = useState(
    {
      color: 'black',
      backgroundColor: 'white'
    }
  )

  const [btnText, setBtnText] = useState("Dark Mode")

  const toggleStyle = () => {
    if (myStyle.backgroundColor == 'white' && mode == 'light') {
      setMyStyle(
        {
          color: 'white',
          // backgroundColor: '#042743'
          backgroundColor: 'gray'
        }
      )
      setTextMode('light');
      setMode('dark');
      showAlert("Dark Mode is Enabled", "success")
      setBtnText("Light Mode")
    }
    else {
      setMyStyle(
        {
          color: 'black',
          backgroundColor: 'white'
        }
      )
      setTextMode('dark');
      setMode('light');
      showAlert("Light Mode is Enabled", "success")
      setBtnText("Dark Mode")
    }
  }

  const toggleRed = () => {
    setMyStyle(
      {
        // color: 'white',
        color: 'ivory	',
        backgroundColor: 'indianred',
      }
    )
    setMode('danger');
    showAlert("Red Theme is Enabled", "success")
    setBtnText("Light Mode")
  }

  const toggleYellow = () => {
    setMyStyle(
      {
        // color: 'black',
        color: 'midnightblue',
        backgroundColor: 'khaki'
      }
    )
    setMode('warning');
    showAlert("Yellow Theme is Enabled", "success")
    setBtnText("Light Mode")
  }

  const toggleGreen = () => {
    setMyStyle(
      {
        color: 'royalblue',
        // backgroundColor: 'lightgreen'
        backgroundColor: 'palegreen'
      }
    )
    setMode('success');
    showAlert("Green Theme is Enabled", "success")
    setBtnText("Light Mode")
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <div className='overflow-hidden' style={myStyle}>

      <Router>
        < Navbar title="TextEdit" mode={mode} />
        {/* <button className="btn darkMode btn-dark my-3 mx-3" onClick={toggleStyle}>{btnText}</button> */}

        <h5 className='px-2 py-1 mx-2 my-1 d-flex flex-column text-center' style={{ backgroundColor: 'lightskyblue', borderRadius: 20, }}>Themes</h5>

        <div className="btn-group mx-3 d-flex" role="group" aria-label="Basic mixed styles example">
          <button type="button" className="btn darkMode btn-dark" onClick={toggleStyle}>{btnText}</button>
          <button type="button" onClick={toggleRed} className="btn btn-danger">Red</button>
          <button type="button" onClick={toggleYellow} className="btn btn-warning">Yellow</button>
          <button type="button" onClick={toggleGreen} className="btn btn-success">Green</button>
        </div>

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path='/' element={<TextForm mode={mode} />} />
            <Route exact path='/MY-APP' element={<TextForm mode={mode} />} />
            <Route exact path='/about' element={<About mode={mode} textMode={textMode} />} />
          </Routes>
        </div>

      </Router>

    </div >
  );
}

export default App;
