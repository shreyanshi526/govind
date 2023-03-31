import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
/* import About from './Components/About'; */
import React,  {useState} from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setmode] = useState('light') ;
  /* tell whether dark mode is enabled or not */

  /* make a useState for alert message */
  const [alert, setalert] = useState(null);


  /* make a arrow fxn which will help us to show the value of alert */
  const showAlert = (message,type) =>{
     
       /* previously alert was null ,now making alert as an object */

        setalert({
          msg:message,
          type:type
        })
  }

  const toggleMode =()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='black';
      showAlert("darkmode enabled","success")
      /* alert fxn is called and parameters are given */
      document.title='textutils-darkmode'
      /* above line change document title using dom manipulation methods */
    }
    else{
       setmode('light');
       document.body.style.backgroundColor='white';
       showAlert("lightmode enabled","success")
       document.title='textutils-lightmode'
    }
  }
  return (
    <>
    <Router>
       <Navbar title="textutils1" aboutText="about us"  mode={mode} toggleMode={toggleMode} />  
       <Alert alert={alert} />
       <div className="container my-3">
       <Routes>
       <Route path="/" element={<bout />} /> 
             <Route path="/">
              <TextForm showAlert={showAlert}heading="your textBox" mode={mode}  />
             </Route>
        </Routes>
        {/* <About/> */}
       </div>
      {/*<Navbar/>*/}
      </Router>
    </>
  );
}

export default App;