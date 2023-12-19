import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

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

const ForgotPass = () => {
  const [email, setEmail] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const submithandler = async (e) => {
    setLoading(true);
    if (!email) {
      toast({
        title: "Please Enter Email Address",
        status: "warning",
        duration: 4000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  return (
    <VStack align="center" color="black">
      <Card
        p={"30px"}
        boxShadow="0px 4px 15px 0px #000000BF"
        borderRadius={"8px"}
      >
        <CardHeader>
          <Text
            fontFamily="body"
            color={"#662671"}
            fontWeight={"600"}
            fontSize={"18px"}
          >
            Did you forget your password?
          </Text>
          <Text
            fontFamily="body"
            color={"#655A5A"}
            fontWeight={"600"}
            fontSize={"13px"}
          >
            Enter your email address and we'll send you a link to restore
            password
          </Text>
        </CardHeader>
        <CardBody>
          <Box>
            <FormControl isRequired id="email">
              <FormLabel fontFamily="body" color={"#655A5A"} fontWeight={"400"}>
                Email Address
              </FormLabel>
              <Input
                placeholder="Enter Your Email"
                value={email}
                type="email"
                borderWidth={"1px"}
                defaultValue="Initial evalue"
                borderColor={"#B1AFAF"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </FormControl>
          </Box>
          <Box marginTop={"30px"}>
            <Button
              bg="#5C218B"
              color="#FFFFFF"
              width="100%"
              style={{ marginTop: 10 }}
              fontFamily="body"
              fontSize="19px"
              borderRadius={"8px"}
              marginBottom={"30px"}
              onClick={submithandler}
            >
              Request reset link
            </Button>
          </Box>
        </CardBody>
        <Center>
          <CardFooter>
            <Link textAlign={"center"} color="#A08CB1" href="/">
              Back To log in
            </Link>
          </CardFooter>
        </Center>
      </Card>
    </VStack>
  );
};

export default ForgotPass;
