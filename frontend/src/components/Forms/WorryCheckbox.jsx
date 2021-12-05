import { FormControl, FormLabel } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/layout";
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";

import styles from "../../MainStyles.module.css";

export const WorryCheckbox = (props) => {
  const { worry, setWorry } = props;

  const onChangeCheckbox = (e) => setWorry(e);

  return (
    <FormControl as="fieldset" mt="5">
      <FormLabel as="legend" className={styles.questionTitle}>お悩み・効果</FormLabel>
      <CheckboxGroup value={worry} onChange={onChangeCheckbox}>
        <HStack spacing="24px">
          <Checkbox value="油分を防ぐ">油分を防ぐ</Checkbox>
          <Checkbox value="潤い・乾燥を防ぐ">潤い・乾燥を防ぐ</Checkbox>
          <Checkbox value="キメを細かく">キメを細かく</Checkbox>
          <Checkbox value="毛穴をなくす">毛穴をなくす</Checkbox>
        </HStack>
        <HStack>
          <Checkbox value="ハリを出す">ハリを出す</Checkbox>
          <Checkbox value="シミを防ぐ">シミを防ぐ</Checkbox>
          <Checkbox value="美白">美白</Checkbox>
          <Checkbox value="油性肌予防">油性肌予防</Checkbox>
        </HStack>
        <HStack>
          <Checkbox value="思春期ニキビ予防">思春期ニキビ予防</Checkbox>
          <Checkbox value="大人ニキビ予防">大人ニキビ予防</Checkbox>
          <Checkbox value="エイジングケア">エイジングケア</Checkbox>
        </HStack>
      </CheckboxGroup>
    </FormControl>
  );
}