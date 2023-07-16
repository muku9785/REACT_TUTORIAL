import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
// import TextForm from "./components/TextForm";
import About from "./components/About"





function App() {
 const [mode, setMode] = useState('light');
 const toggleMode=()=>{
 if (mode==='light') {
  setMode('dark')
 }
 else{
  setMode('light')
 }}

  return (
    <>
      <Navbar aboutText="rahul" mode={mode} toggleMode ={toggleMode} />
     
      <div className="container">
      {/* <TextForm /> */}
      <About/>
      </div>
      
    </>
  );
}

export default App;
