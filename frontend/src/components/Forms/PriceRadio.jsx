import { FormControl, FormLabel } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";

import styles from "../../MainStyles.module.css";

export const PriceRadio = (props) => {
  const { price, setPrice } = props;

  const onChangeRadio = (e) => setPrice(e)

  return (
    <FormControl as="fieldset" mt="5">
      <FormLabel as="legend" className={styles.questionTitle}>お値段</FormLabel>
      <RadioGroup value={price} onChange={(e) => onChangeRadio(e)}>
        <HStack spacing="24px">
          <Radio value="1000">~1,000</Radio>
          <Radio value="2000">~2,000</Radio>
          <Radio value="3000">~3,000</Radio>
          <Radio value="5000">~5,000</Radio>
        </HStack>
        <HStack spacing="24px">
          <Radio value="7000">~7,000</Radio>
          <Radio value="10000">~10,000</Radio>
          <Radio value="10001">10,000~</Radio>
        </HStack>
      </RadioGroup>
    </FormControl>
  );
}