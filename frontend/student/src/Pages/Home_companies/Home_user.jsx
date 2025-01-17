import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import CompaniesSlider from "./CompaniesSlider";

const Home_user = () => {
  const { companies } = useContext(StoreContext);

  return (
      <CompaniesSlider companies={companies} />
  );
};

export default Home_user;
