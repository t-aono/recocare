import { FormControl, FormLabel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Grid, GridItem } from "@chakra-ui/react";

import styles from "../../MainStyles.module.css";

export const PriceRadio = (props) => {
  const { price, setPrice } = props;

  const onChangeRadio = (e) => setPrice(e);

  return (
    <FormControl as="fieldset" mt="5">
      <FormLabel as="legend" className={styles.questionTitle}>
        お値段
      </FormLabel>

      <RadioGroup value={price} onChange={(e) => onChangeRadio(e)}>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Radio value="1000">~1,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="2000">~2,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="3000">~3,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="5000">~5,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="7000">~7,000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="10000">~1,0000</Radio>
          </GridItem>
          <GridItem>
            <Radio value="10001">1,000~</Radio>
          </GridItem>
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};
