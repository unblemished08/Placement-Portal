import { Navbar } from "./Header/navbar"
import {BrowserRouter,Route,Routes} from "react-router-dom"

const Statistics=()=><h1>Statistics Page</h1>
const PastRecord=()=><h1>Past record Page</h1>
import About from "./Pages/About"
import DisplayResult from "./Pages/Results/DisplayResult"
import DisplayCompanyResult from "./Pages/Results/DisplayCompanyResult"
import Login from "./Pages/Login"
import CompanyDetails from "./Pages/Company_Info/Company_detail"
import Companies from "./Pages/Company_Info/Companies"
import Signup from "./Pages/Signup"
import Home_user from "./Pages/Home_companies/Home_user"
import Profile from "./Pages/Profile"
import Recruiters from "./Pages/Recruiters"
import ContactUs from "./Pages/ContactUs/ContactUs"
import { StoreContext } from "./Context/StoreContext"
import { useContext } from "react"
import PlacementStats from "./Pages/statistics/Stats"
function App() {
  const {userData} = useContext(StoreContext);
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <>
    {/* // <BrowserRouter> */}
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home_user/>}/>
      <Route path="/companies" element={<Companies/>}/>
      <Route path="/statistics" element={<Statistics/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/result" element={<DisplayResult/>}/>
      <Route path="/companyResult" element={<DisplayCompanyResult/>}/>
      <Route path="/recruiters" element={<Recruiters/>}/>
      <Route path="/companydetails" element={<CompanyDetails/>}/>
      <Route path="/profile" element={<Profile {...userData}/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/stats" element={<PlacementStats/>}/>
      </Routes>
    {/* // </BrowserRouter> */}
    </>   
  );
}

export default App
