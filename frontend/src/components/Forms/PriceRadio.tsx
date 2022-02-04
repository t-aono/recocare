import { FormControl, FormLabel } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Grid, GridItem } from "@chakra-ui/react";
import { useMemo } from "react";

type Props = {
  price: string;
  setPrice: (e: string) => void;
};

export const PriceRadio = (props: Props) => {
  const { price, setPrice } = props;

  const priceList = useMemo(
    () => ["1000", "2000", "3000", "5000", "7000", "10000", "20000"],
    []
  );

  const onChangeRadio = (e: string) => setPrice(e);

  return (
    <FormControl mt="5">
      <FormLabel as="legend" mb="5" borderBottom="solid 1px #ccc">
        ご予算はどれくらいですか？
      </FormLabel>

      <RadioGroup name="price" value={price} onChange={(e) => onChangeRadio(e)}>
        <Grid templateColumns="repeat(2, 1fr)" columnGap={1} rowGap={3}>
          {priceList.map((p) => (
            <GridItem key={p}>
              <Radio value={p} colorScheme="orange">
                ～
                {Number(p).toLocaleString("ja-JP", {
                  style: "currency",
                  currency: "JPY",
                })}
              </Radio>
            </GridItem>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};
