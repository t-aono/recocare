import { FormControl, FormLabel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Grid, GridItem } from "@chakra-ui/react";
import { useMemo } from "react";

export const PriceRadio = (props) => {
  const { price, setPrice } = props;

  const priceList = useMemo(() => [1000, 2000, 3000, 5000, 7000, 10000, 20000]);

  const onChangeRadio = (e) => setPrice(e);

  return (
    <FormControl mt="5">
      <FormLabel as="legend" mb='5' borderBottom='solid 1px #ccc'>
        ご予算はどれくらいですか？
      </FormLabel>

      {/* <RadioGroup value={price} onChange={(e) => onChangeRadio(e)}> */}
      <Grid templateColumns="repeat(2, 1fr)" columnGap={1} rowGap={3} >
        {priceList.map((item) => (
          <GridItem key={item}>
            <RadioGroup value={price} onChange={(e) => onChangeRadio(e)}>
              <Radio value={item} colorScheme='orange'
              >～{item.toLocaleString("ja-JP", {
                style: "currency",
                currency: "JPY",
              })}</Radio>
            </RadioGroup>
          </GridItem>
        ))}
        {/* <GridItem>
            <Radio value="2000" colorScheme='orange'>～ 2,000 円</Radio>
          </GridItem>
          <GridItem>
            <Radio value="3000" colorScheme='orange'>～ 3,000 円</Radio>
          </GridItem>
          <GridItem>
            <Radio value="5000" colorScheme='orange'>～ 5,000 円</Radio>
          </GridItem>
          <GridItem>
            <Radio value="7000" colorScheme='orange'>～ 7,000 円</Radio>
          </GridItem>
          <GridItem>
            <Radio value="10000" colorScheme='orange'>～ 10,000 円</Radio>
          </GridItem>
          <GridItem>
            <Radio value="10001" colorScheme='orange'>10,000 円 ～</Radio>
          </GridItem> */}
      </Grid>
      {/* </RadioGroup> */}
    </FormControl>
  );
};
