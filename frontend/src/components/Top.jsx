import { useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import { useLocation, Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import { Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import styles from "../MainStyles.module.css";
import CosmeImage from '../images/cosme.png'
import ReadingSvg from '../svgs/undraw_reading.svg';

export const Top = () => {
  const location = useLocation();

  useEffect(() => {

  }, [location]);

  return (
    <>
      <Center className={styles.topMessage}>
        <Box as="h1" fontSize="1.1em">
          お気に入りスキンケアを見つけよう
        </Box>
      </Center>
      <Box my="20" position="relative" left="50%" transform="translateX(-50%)" w="100vw" >
        <Image src={CosmeImage} h="80vw" maxH="800px" objectFit="cover" m="0 auto" />
      </Box>
      <Box lineHeight="2.5em">
        どれが自分に自分にあっているか分からない。<br />
        商品があり過ぎて探すのが疲れる。<br />
        悩みを解消できる商品を効率的に見つけたい。<br />
        <br />
        そのように考えた事はありませんか？<br />
        ３つの質問に答えるだけで、あなたの合わせたランキングを紹介します!
      </Box>
      <Box mt='20' mb='7em'>
        <Image src={ReadingSvg} />
      </Box>
      <Center>
        <Link to="/question">
          <Button
            className={styles.primaryBtn}
            colorScheme="red500"
            height='65px'
            width='200px'
            size="lg"
          >
            やってみる
          </Button>
        </Link>
      </Center>
      <Box mt="7em" position="relative" left="50%" transform="translateX(-50%)" w="100vw" >
        <Image src={CosmeImage} h="80vw" maxH="800px" objectFit="cover" m="0 auto" />
      </Box>
    </>
  );
};
