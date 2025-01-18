import {Route,Routes} from "react-router-dom"
import Home from "./components/pages/Home/Home";
import DisplayStudentDetails from "./components/pages/StudentDetails/DisplayStudentDetails";
import DisplayFullDetail from "./components/pages/StudentDetails/DisplayFullDetail";
import CompanyRequirements from "./components/pages/CompanyRequirements/CompanyRequirements";

function App() {
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/companyRequirements" element={<CompanyRequirements/>}/>
      <Route path="/studentDetails" element={<DisplayStudentDetails/>}/>
      <Route path="/fullDetails" element={<DisplayFullDetail/>}/>
      </Routes>
    </>   
  );
}
export default App