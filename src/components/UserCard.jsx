import React from "react";
import { Flex, Box, Image, Skeleton } from "@chakra-ui/react";

const UserCard = ({ fName, lName, image, loading }) => {
  return (
    <Skeleton isLoaded={loading}>
      <Flex justifyContent="space-between" margin="2rem 4rem 1rem 4rem">
        <Box>
          {fName} {lName}
        </Box>
        <Box>
          <Image
            boxSize="100px"
            borderRadius="50%"
            objectFit="cover"
            src={image}
            alt={fName}
          />
        </Box>
      </Flex>
    </Skeleton>
  );
};

export default UserCard;
