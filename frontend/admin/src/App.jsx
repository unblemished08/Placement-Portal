import Form from "./form";
import React from "react";
import Login from "./login";
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </>
  )
}

export default App;
