import { Navbar } from "./Header/navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"

const Statistics=()=><h1>Statistics Page</h1>
const PastRecord=()=><h1>Past record Page</h1>
import About from "./Pages/About"
import Login from "./Pages/Login"
import Search from "./Pages/Search"
import Signup from "./Pages/Signup"
import Home_user from "./Pages/Home_user"
import MyProfile from "./Pages/MyProfile"
import { StoreContext } from "./Context/StoreContext"
import { useContext } from "react"
function App() {
  const {userData} = useContext(StoreContext);
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <>
    {/* // <BrowserRouter> */}
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home_user/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/myprofile" element={<MyProfile {...userData}/>} />
      </Routes>
    {/* // </BrowserRouter> */}
    </>   
  );
}

export default App
