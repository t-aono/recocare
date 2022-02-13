import { Flex, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Helmet, HelmetProvider } from "react-helmet-async";

import HeaderImage from "../images/recocare.png";
import React from "react";

export const Header = () => {
  return (
    <>
      <React.StrictMode>
        <HelmetProvider>
          <Helmet>
            <meta property="og:url" content="http://recocare.tk" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Recocare" />
            <meta
              property="og:description"
              content="お気に入りのスキンケアを見つけよう！あなたに合わせたオリジナルランキングを紹介"
            />
            <meta property="og:site_name" content="Recocare" />
            <meta property="og:image" content="http://recocare.tk/build/static/media/logo.ac6a0467.png" />
            <meta name="twitter:card" content="summary" />
          </Helmet>
        </HelmetProvider>
      </React.StrictMode>
      <Flex my="8" justifyContent="center">
        <Box as="a" href="/" _hover={{ cursor: "pointer" }}>
          <Image src={HeaderImage} />
        </Box>
      </Flex>
    </>
  );
};
