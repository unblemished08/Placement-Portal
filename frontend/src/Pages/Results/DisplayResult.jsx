import Result from "./Result";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";

const DisplayResult=()=>{
  const {resultDeclaredCompanies} = useContext(StoreContext);
  return(
        <Result companies={resultDeclaredCompanies}/>
    );
}

export default DisplayResult;