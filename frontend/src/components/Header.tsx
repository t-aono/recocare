import { Flex, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Helmet } from "react-helmet";

import HeaderImage from "../images/recocare.png";

export const Header = () => {
  return (
    <>
      <Helmet>
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recocare" />
        <meta
          property="og:description"
          content="お気に入りのスキンケアを見つけよう！あなたに合わせたオリジナルランキングを紹介"
        />
        <meta property="og:site_name" content="Recocare" />
        <meta property="og:image" content="http://localhost:3000/build/static/media/logo.ac6a0467.png" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Flex my="8" justifyContent="center">
        <Box as="a" href="/" _hover={{ cursor: "pointer" }}>
          <Image src={HeaderImage} />
        </Box>
      </Flex>
    </>
  );
};
