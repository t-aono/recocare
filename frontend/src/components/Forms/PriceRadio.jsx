import { FormControl, FormLabel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Grid, GridItem } from "@chakra-ui/react";

import styles from "../../MainStyles.module.css";

export const PriceRadio = (props) => {
  const { price, setPrice } = props;

  const onChangeRadio = (e) => setPrice(e);

  return (
    <FormControl as="fieldset" mt="5">
      <FormLabel as="legend" mb='5' borderBottom='solid 1px #ccc'>
        ご予算はどれくらいですか？
      </FormLabel>

      <RadioGroup value={price} onChange={(e) => onChangeRadio(e)}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} w='100vw'>
          <GridItem>
            <Radio value="1000" colorScheme='orange'>~1,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="2000" colorScheme='orange'>~2,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="3000" colorScheme='orange'>~3,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="5000" colorScheme='orange'>~5,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="7000" colorScheme='orange'>~7,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="10000" colorScheme='orange'>~1,0000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="10001" colorScheme='orange'>1,000~</Radio>
          </GridItem>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};
