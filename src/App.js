import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Aboutus from './components/Aboutus/Aboutus';
import Theform from './components/Theform/Theform';
import Alert from './components/Alert/Alert';
import { useState } from 'react';




// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


import {
  BrowserRouter as Router,
  Routes,
  Route
  // Navigate
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [Text, setText] = useState('Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('light Mode');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      setText('Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>

        <Navbar navbarbrand="E-commerce" mode={mode} toggleMode={toggleMode} Text={Text}></Navbar>
        <Alert alert="This is a alert"></Alert>
         <Theform heading="Enter your thoughts" mode={mode}></Theform>
        <Routes>

          {/* <Route path="/textform" element={<Theform heading="Enter your thoughts" mode={mode}></Theform>} >
          </Route> */}

          <Route path="/About" element={ <Aboutus/>} >
          </Route>

          
          
           
          

        </Routes>

      </Router>

    </>
  );
}

export default App;
