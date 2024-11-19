import { Navbar } from "./Header/navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"

const Home=()=><h1>welcome Home</h1>
const Search=()=><h1>welcome Search</h1>
const Statistics=()=><h1>Statistics Page</h1>
const PastRecord=()=><h1>Past record Page</h1>
import About from "./Pages/About"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/past-records" element={<PastRecord/>} />
      <Route path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
