import {Route,Routes} from "react-router-dom"
import Home from "./components/pages/Home/Home";

function App() {
  return (
    //every route must be added here if we need to render any sort of component to maintain single page
    <>
      <Routes>

      <Route path="/" element={<Home/>}/>
      
      </Routes>
    </>   
  );
}
export default App