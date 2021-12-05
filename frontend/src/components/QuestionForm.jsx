import { useState } from "react";
import { Center, Heading, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import { useHistory } from "react-router-dom";

import styles from "../MainStyles.module.css";
import { CategoryRadio } from "./Forms/CategoryRadio";
import { PriceRadio } from "./Forms/PriceRadio";
import { SkinRadio } from "./Forms/SkinRadio";
import { WorryCheckbox } from "./Forms/WorryCheckbox";
import { SensitiveRadioCheck } from "./Forms/SensitiveRadioCheck";

export const QuestionForm = () => {
  const history = useHistory();
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [skin, setSkin] = useState('');
  const [worry, setWorry] = useState('');
  const [sensitive, setSensitive] = useState('');
  const [feature, setFeature] = useState('');

  const toast = useToast();

  const checkAnswer = () => {
    if (!category || !skin || !sensitive) {
      toast({
        title: "必須項目のうち未入力があります！",
        description: "右上に * のある項目は必須です。",
        status: "warning",
        duration: 3000,
        isClosable: true,
      })
    } else {
      history.push({
        pathname: '/ranking',
        state: { category, price, skin, worry, sensitive, feature }
      })
    }
  }

  return (
    <>
      <Box className={styles.mainFontColor} minW="570px">
        <Heading as="h3" my="3">アンケート</Heading>
        <CategoryRadio category={category} setCategory={setCategory} />
        <PriceRadio price={price} setPrice={setPrice} />
        <SkinRadio skin={skin} setSkin={setSkin} />
        <WorryCheckbox worry={worry} setWorry={setWorry} />
        <SensitiveRadioCheck sensitive={sensitive} setSensitive={setSensitive} feature={feature} setFeature={setFeature} />
      </Box>
      <Center mt="10">
        <Button colorScheme="teal" size="lg" variant="ghost" onClick={checkAnswer}>回答する</Button>
      </Center>
    </>
  );
}