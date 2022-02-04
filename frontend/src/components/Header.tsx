import { Flex, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import HeaderImage from "../images/recosk.png";

export const Header = () => {
  return (
    <Flex my="8" justifyContent="center">
      <Box as="a" href="/" _hover={{ cursor: "pointer" }}>
        <Image src={HeaderImage} />
      </Box>
    </Flex>
  );
};
