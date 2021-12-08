import { useEffect, useState } from "react";
import { Center, Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import { useHistory, useLocation } from "react-router-dom";

import styles from "../MainStyles.module.css";
import { CategoryRadio } from "./Forms/CategoryRadio";
import { PriceRadio } from "./Forms/PriceRadio";
import { WorryCheckbox } from "./Forms/WorryCheckbox";

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
  }, []);

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
      <Box className={styles.mainFontColor} minW="570px">
        <Heading as="h3" my="3">
          アンケート
        </Heading>
        <CategoryRadio category={category} setCategory={setCategory} />
        <WorryCheckbox worry={worry} setWorry={setWorry} />
        <PriceRadio price={price} setPrice={setPrice} />
      </Box>
      <Center mt="10">
        <Button
          colorScheme="teal"
          size="lg"
          variant="ghost"
          onClick={checkAnswer}
        >
          回答する
        </Button>
      </Center>
    </>
  );
};
