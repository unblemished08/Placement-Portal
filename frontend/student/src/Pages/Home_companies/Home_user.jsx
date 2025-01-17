import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import CompaniesSlider from "./CompaniesSlider";

const Home_user = () => {
  const { companies } = useContext(StoreContext);

  return (
    <>
    <div className="border-solid border-2 border-sky-500 h-20">Notification bar</div>
    <CompaniesSlider companies={companies} />
    <div className="border-solid border-2 border-sky-500 h-20">Footer - tnp linkedin mail copyright reserved</div>
    </>
  );
};

export default Home_user;
