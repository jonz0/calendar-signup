import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import UserPool from "../UserPool";
import { PasswordField } from "./PasswordField";
// When using loose Javascript files:
// Modules, e.g. Webpack:
var AmazonCognitoIdentity = require("amazon-cognito-identity-js");
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

// ES Modules, e.g. transpiling with Babel
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  var attributeList = [];

  function onSubmit(event) {
    event.preventDefault();

    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: email,
    });

    var attributeFirst = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:firstname",
      Value: first,
    });

    var attributeLast = new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:lastname",
      Value: last,
    });

    attributeList.push(attributeEmail, attributeFirst, attributeLast);

    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  }

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <form onSubmit={onSubmit}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <FormLabel>Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                  <FormLabel>First name</FormLabel>
                  <Input
                    id="firstname"
                    type="text"
                    value={first}
                    onChange={(event) => {
                      setFirst(event.target.value);
                    }}
                  />
                  <FormLabel>Last name</FormLabel>
                  <Input
                    id="lastname"
                    type="text"
                    value={last}
                    onChange={(event) => {
                      setLast(event.target.value);
                    }}
                  />
                  <FormLabel>Password</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <Button mt={4} colorScheme="teal" type="submit">
                    Submit
                  </Button>
                </FormControl>
              </form>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Button variant="primary" colorScheme="teal">
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
