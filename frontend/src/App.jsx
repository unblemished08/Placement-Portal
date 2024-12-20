import { Navbar } from "./Header/navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"

const Home=()=><h1>welcome Home</h1>
const Search=()=><h1>welcome Search</h1>
const Statistics=()=><h1>Statistics Page</h1>
const PastRecord=()=><h1>Past record Page</h1>
import About from "./Pages/About"
import Login from "./Pages/Login"
import Signup from "./Pages/SignUp"

function App() {
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/search" element={<search/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/past-records" element={<PastRecord/>} />
      <Route path="about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App
