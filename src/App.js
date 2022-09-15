import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#382e6e";
      showAlert("Dark Mode has been Enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="KnowYourText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/about" element={<About />} /> */}
            {/* always use exact before path otherwise react will partially match the req and some other page may show which was not asked  */}
            {/* <Route exact path="/" element={<TextForm heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />
}/>
          </Routes> */}
          <TextForm heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert} />
        </div>
      {/* </Router> */}
      {/* <About /> */}
    </>
  );
}

export default App;
