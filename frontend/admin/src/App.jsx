import Form from "./form";
import React from "react";
import Login from "./login";
import Signup from "./signup";
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    
    </>
  )
}

export default App;
