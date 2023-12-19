import React from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  CardHeader,
} from "@chakra-ui/react";
import Login from "../components/Authentication/login";
// import SignUp from "../components/Authentication/SignUp";
// import { useHistory } from "react-router";
import { useEffect } from "react";
import SignUp from "../components/Authentication/SignUp";

const HomePage = () => {
  // const history = useHistory();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("userInfo"));
  //   console.log(user);
  // }, [history]);
  const backgroundImageUrl = "../bg-3.png";
  return (
    <Container height="100vh" maxW="xl">
      <Login />
    </Container>
  );
};

export default HomePage;
