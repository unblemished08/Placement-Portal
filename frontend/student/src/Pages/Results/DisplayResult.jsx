import Result from "./Result";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";

const DisplayResult=()=>{
  const {resultDeclaredCompanies} = useContext(StoreContext);
  return(
      <div className="h-screen bg-gray-700">
        <Result companies={resultDeclaredCompanies}/>
      </div>
    );
}

export default DisplayResult;