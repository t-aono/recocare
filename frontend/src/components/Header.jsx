import { Flex, Heading, Box, Spacer } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import HeaderImage from '../images/recos.png';

export const Header = () => {

  return (
    <Flex
      my="8"
      justifyContent="center"
    >
      <Box as="a" href="/" _hover={{ cursor: "pointer" }}>
        <Image src={HeaderImage} />
      </Box>
    </Flex>
  );
};
