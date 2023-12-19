import React, { useState } from "react";
import {
  Card,
  CardBody,
  Center,
  Container,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import {
  VStack,
  Box,
  StackDivider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [loading, setLoading] = useState(false);

  // const history = useHistory();

  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill All The Fields",

        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        config
      );
      console.log(data);

      toast({
        title: "Login  Successfull",
        description: `Welcome ${email}`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      setLoading(false);

      navigate("/home");
    } catch (e) {
      toast({
        title: "Error Occured",
        description: "Wrong Credentials! Please Try Again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
  return (
    <Container height="100vh" maxW="xl">
      <VStack
        align="stretch"
        color="black"
        marginTop={"130px"}
        boxShadow="0px 4px 15px 0px #000000BF"
        borderRadius={"8px"}
      >
        <Card>
          <Box>
            <Center>
              <Image
                src="https://tse3.mm.bing.net/th?id=OIP.iaByGvy_WJ6SowxEELTTXwHaFj&pid=Api&P=0&h=180"
                boxSize="110px"
                objectFit="contain"
              />
            </Center>
            <Text
              fontFamily="body"
              color={"#717070"}
              fontWeight={"400"}
              fontSize={"18px"}
            >
              Welcome To DigitalFlake Admin
            </Text>
          </Box>
          <CardBody>
            <Box align="stretch">
              <FormControl isRequired id="email">
                <FormLabel>Email ID</FormLabel>
                <Input
                  placeholder="Enter Your Email"
                  value={email}
                  type="email"
                  borderWidth={"1px"}
                  defaultValue="Initial evalue"
                  borderColor={"#B1AFAF"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Box>

            <Box>
              <FormControl isRequired id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    type={show ? "text" : "password"}
                    placeholder="Enter Your password"
                    borderWidth={"1px"}
                    borderColor={"#B1AFAF"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Box>

            <Box>
              <FormControl isRequired id="confirmpassword">
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    value={confirmpassword}
                    type={show ? "text" : "password"}
                    placeholder="Enter Password again.."
                    borderWidth={"1px"}
                    borderColor={"#B1AFAF"}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
            </Box>

            <Box marginTop={"30px"}>
              <Button
                bg="#5C218B"
                color="#FFFFFF"
                width="100%"
                style={{ marginTop: 10 }}
                fontFamily={"Work sans"}
                fontSize="19px"
                borderRadius={"8px"}
                onClick={submitHandler}
                isLoading={loading}
                marginBottom={"30px"}
              >
                Login
              </Button>
            </Box>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
};

export default SignUp;
