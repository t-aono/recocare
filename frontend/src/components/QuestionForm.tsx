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
import ChooseSvg from "../svgs/undraw_choose.svg";
import CosmeImage from "../images/cosme.png";

type Genre = {
  id: string;
  genre_id: string;
  name: string;
};

type Effect = {
  id: string;
  name: string;
};

type Location = {
  genre: string;
  price: string;
  effects: string[];
};

type History =
  | string
  | {
      genre: string;
      genreName: string;
      effects: string[];
      effectNames: string[];
      price: string;
    };

export const QuestionForm = () => {
  const history = useHistory<History>();
  const location = useLocation<Location>();
  const toast = useToast();
  const [category, setCategory] = useState<string>();
  const [categories, setCategories] = useState<Genre[]>();
  const [worry, setWorry] = useState<string[]>();
  const [worries, setWorries] = useState<Effect[]>();
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (location.state) {
      if (location.state.genre) setCategory(location.state.genre);
      if (location.state.price) setPrice(location.state.price);
      if (location.state.effects) setWorry(location.state.effects);
    }
  }, [location.state]);

  const checkAnswer = () => {
    if (!category || worry!.length) {
      toast({
        status: "warning",
        variant: "top-accent",
        title: "必須項目が未選択です。",
        duration: 3000,
        isClosable: true,
      });
    } else {
      history.push({
        pathname: "/ranking",
        state: {
          genre: category,
          genreName: categories!.find((cate) => cate!.genre_id === category)!.name,
          effects: worry!,
          effectNames: worries!.map((wo) => worry!.includes(String(wo.id)) && wo.name).filter((wo) => wo) as string[],
          price: price,
        },
      });
    }
  };

  return (
    <>
      <Box>
        <Center as="h1" my="3" fontSize="1.5em">
          アンケートフォーム
        </Center>
        <Box my="3em">
          <Image src={ChooseSvg} my={10} w="100vw" objectFit="contain" />
        </Box>
        <VStack spacing={12}>
          <CategoryRadio category={category as string} setCategory={setCategory} setCategories={setCategories} />
          <WorryCheckbox worry={worry as string[]} setWorry={setWorry} setWorries={setWorries} />
          <PriceRadio price={price} setPrice={setPrice} />
        </VStack>
      </Box>
      <Center mt="5em">
        <Button className={styles.primaryBtn} colorScheme="red500" height="65px" width="200px" size="lg" onClick={checkAnswer}>
          回答する
        </Button>
      </Center>
      <Box my="20" position="relative" left="50%" transform="translateX(-50%)" w="100vw">
        <Image src={CosmeImage} h="80vw" maxH="800px" objectFit="cover" m="0 auto" />
      </Box>
    </>
  );
};
