import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
