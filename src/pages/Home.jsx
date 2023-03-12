import React, { useEffect, useState } from "react";
import { Flex, Heading, Button, Box, Skeleton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserCard from "../components/UserCard";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(8);
  const [loading, setLoading] = useState(true);
  const handleLogout = () => {
    localStorage.setItem("isAuth", JSON.stringify(false));
    navigate("/login");
  };

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setTimeout(() => {
        setLoading(false);
        setPage((prev) => prev + 1);
      }, 1000);
    }
  };

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=${item}`)
      .then((res) => {
        setUser((prev) => [...prev, ...res.data.results]);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);
  return (
    <>
      <Flex justifyContent="space-between" margin="1rem 4rem">
        <Box>
          <Heading as="h4" size="lg">
            Users
          </Heading>
        </Box>
        <Box>
          <Button colorScheme="red" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Flex>
      <Box>
        {user?.map((el) => (
          <UserCard
            key={el.login.uuid}
            fName={el.name.first}
            lName={el.name.last}
            image={el.picture.large}
            loading={loading}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
