import React from "react";
//import './homepage.styles.scss';
import HomePageContainer from "./homepage.styles";

import Directory from "../../components/directory/directory.component";

const Homepage = () => (
  <HomePageContainer>
    <h1>Welcome to my Homepage</h1>
    <Directory></Directory>
  </HomePageContainer>
);

export default Homepage;
