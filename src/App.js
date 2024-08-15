import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  //Switch,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }


  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#274752";
      showAlert("Dark mode enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success")
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      <div className="container my-3">

        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />} />

          <Route exact path="/about" element={<About mode={mode} />} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
