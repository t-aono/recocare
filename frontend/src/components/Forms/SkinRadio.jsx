import { FormControl, FormLabel } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";

import styles from "../../MainStyles.module.css";

export const SkinRadio = (props) => {
  const { skin, setSkin } = props;

  const onChangeRadio = (e) => setSkin(e);

  return (
    <FormControl as="fieldset" mt="5" isRequired>
      <FormLabel as="legend" className={styles.questionTitle}>肌タイプ</FormLabel>
      <RadioGroup value={skin} onChange={(e) => onChangeRadio(e)}>
        <HStack spacing="24px">
          <Radio value="乾燥肌">乾燥肌</Radio>
          <Radio value="脂性肌">脂性肌</Radio>
          <Radio value="普通">普通</Radio>
          <Radio value="わからない">わからない</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}