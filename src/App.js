
import './App.css';
import Alert from './Componants/Alert';
import About from './Componants/About';
import Navbar from './Componants/Navbar';
import TextForm from './Componants/TextForm';
import React, { useState } from 'react';
import { Routes,Route } from "react-router-dom";


 

function App() {
  const [mode, setDarkMode] = useState(`light`);
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{

    setAlert({
      msg:message,
      types:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }

  const toggleMode = ()=>
  {
    if(mode==='light')
    {
      setDarkMode(`dark`)
      document.body.style.backgroundColor="#48586e"
      showAlert("Dark Mode has Been Enable","success")
      
     
    }
    else{
      setDarkMode(`light`)
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has Been Enable","success")
     
    }
  }
  return (
    <> 
    
<Navbar title="MyAPP"  aboutText="about us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-4" >
  <Routes>
  <Route exact path='/'element={<TextForm showAlert={showAlert} heading="Enter the text to analysis" mode={mode}/>} />
<Route  exact path='/about'element={<About />} />
</Routes>
</div>
   </>
  );
}

export default App;