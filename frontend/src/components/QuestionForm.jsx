import { useEffect, useState } from "react";
import { Center, Box, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import { useHistory, useLocation } from "react-router-dom";
import { Image } from "@chakra-ui/image";

import styles from "../MainStyles.module.css";
import { CategoryRadio } from "./Forms/CategoryRadio";
import { PriceRadio } from "./Forms/PriceRadio";
import { WorryCheckbox } from "./Forms/WorryCheckbox";
import ChooseSvg from '../svgs/undraw_choose.svg';
import CosmeImage from '../images/cosme.png'

export const QuestionForm = () => {
  const history = useHistory();
  const location = useLocation();
  const toast = useToast();
  const [category, setCategory] = useState("");
  const [worry, setWorry] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (location.state) {
      if (location.state.genre) setCategory(location.state.genre);
      if (location.state.price) setPrice(location.state.price);
      if (location.state.effects) setWorry(location.state.effects);
    }
  }, [location]);

  const checkAnswer = () => {
    if (!category || !worry.length) {
      toast({
        title: "必須項目が未選択です。",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      history.push({
        pathname: "/ranking",
        state: { genre: category, price: price, effects: worry },
      });
    }
  };

  return (
    <>
      <Box>
        <Center as="h1" my="3" fontSize="1.5em">
          アンケートフォーム
        </Center>
        <Box my='3em'>
          <Image src={ChooseSvg} my={10} w='100vw' objectFit='contain' />
        </Box>
        <VStack spacing={12}>
          <CategoryRadio category={category} setCategory={setCategory} />
          <WorryCheckbox worry={worry} setWorry={setWorry} />
          <PriceRadio price={price} setPrice={setPrice} />
        </VStack>
      </Box>
      <Center mt="5em">
        <Button
          className={styles.primaryBtn}
          colorScheme="red500"
          height='65px'
          width='200px'
          size="lg"
          onClick={checkAnswer}
        >
          回答する
        </Button>
      </Center>
      <Box my="20" position="relative" left="50%" transform="translateX(-50%)" w="100vw" >
        <Image src={CosmeImage} h="80vw" maxH="800px" objectFit="cover" m="0 auto" />
      </Box>
    </>
  );
};
