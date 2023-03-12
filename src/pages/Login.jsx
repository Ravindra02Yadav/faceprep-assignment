import React, { useState, useEffect } from "react";
import { Input, Box, Button, FormControl, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isUserAuth, setIsUserAuth] = useState(false)
  const navigate = useNavigate();
  const handleForm = () => {
    if (username === "foo" && password === "bar") {
      localStorage.setItem("isAuth", JSON.stringify(true));

      navigate("/");
    } else {
      alert("Wrong username or Password");
    }
  };

  // console.log(isUserAuth)
  return (
    <Box
      m="auto"
      width={["60%", "50%", "40%", "35%"]}
      boxShadow="xl"
      p={["1rem", "1.5rem", "3rem", "4rem"]}
      borderRadius="1rem"
      mt="2rem"
    >
      <Image src="" />
      <FormControl>
        <Box m="0 0 2rem 0">
          <label for="Username">Username</label>
          <Input
            type="text"
            size="md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box m="0 0 2rem 0">
          <label for="Password">Password</label>
          <Input
            type="text"
            size="md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button
          data-testid="loginBtn"
          colorScheme="red"
          w="100%"
          size="md"
          onClick={handleForm}
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Login;
