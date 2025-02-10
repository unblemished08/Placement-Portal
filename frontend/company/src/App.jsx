import {Route,Routes} from "react-router-dom"
import Home from "./components/pages/Home/Home";
import DisplayStudentDetails from "./components/pages/StudentDetails/DisplayStudentDetails";
import DisplayFullDetail from "./components/pages/StudentDetails/DisplayFullDetail";
import CompanyRequirements from "./components/pages/CompanyRequirements/CompanyRequirements";
import AddResult from "./components/pages/AddResult/AddResult";
import Notification from "./components/pages/Notification/Notification";
import { Navbar } from "./components/Header/navbar";
import About from "./components/pages/about/About";
import Login from "./components/pages/Login_Signup/login";
import ContactUs from "./components/pages/ContactUs/ContactUs";
function App() {
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/companyRequirements" element={<CompanyRequirements/>}/>
      <Route path="/studentDetails" element={<DisplayStudentDetails/>}/>
      <Route path="/fullDetails" element={<DisplayFullDetail/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/uploadResult" element={<AddResult/>} />
      <Route path="/sendNotification" element={<Notification/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
    </>   
  );
}
export default App