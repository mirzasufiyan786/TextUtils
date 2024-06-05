import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2000);

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#193359';
      showAlert("Dark mode has been enabled", "success");
      //    to give a flash in title
      // setInterval(() => {
      //   document.title="hy Mirza"
      // }, 1000);
      // setInterval(() => {
      //   document.title="Kiya hall hy"
      // }, 1500);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='FIRST_APP' about='About Us' mode={mode} toggelMode={toggelMode} />
        <Alert alert={alert} />

        <div className="container">
          {/* <Routes> */}
            {/* <Route   path="/about" element={ */}
            {/* <About /> */}
            {/* // } /> */}
            {/* <Route exact path="/" element={ */}
            <TextForm heading='Enter the text here.' mode={mode} showAlert={showAlert} />
            {/* } /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App
