import { Flex, Heading, Box, Spacer } from "@chakra-ui/react";

export const Header = () => {

  return (
    <Flex
      as="nav"
      w="100%"
      h="50px"
      bg="teal.200"
      color="white"
      px="20px"
      align="center"
    >
      <Box as="a" href="/" _hover={{ cursor: "pointer" }}>
        <Heading
          as="h1"
          fontSize={{ base: "md", md: "lg" }}
          color="white"
        >
          Cosmetic Rank
        </Heading>
      </Box>
      <Spacer />
    </Flex>
  );
};
