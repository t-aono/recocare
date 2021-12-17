import useSWR from "swr";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { Grid } from "@chakra-ui/react";
import { useEffect } from "react";

export const CategoryRadio = (props) => {
  const { category, setCategory, setCategories } = props;

  const onChangeRadio = (e) => setCategory(e);

  const url = `${process.env.REACT_APP_BACKEND_HOST}api/genre`;
  const fetcher = (arg) => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) setCategories(data);
  }, [data, setCategories]);
  if (error) return <Center>データのアクセスに失敗しました。</Center>;

  return (
    <FormControl isRequired mt="5">
      <FormLabel as="legend" mb='5' borderBottom='solid 1px #ccc'>
        どの種類の商品をお探しですか？
      </FormLabel>
      {data ? (
        <RadioGroup
          name='category'
          value={category}
          onChange={(e) => onChangeRadio(e)}
        >
          <Grid templateColumns="repeat(2, 1fr)" columnGap={1} rowGap={3} >
            {data.map((genre) => (
              <GridItem key={genre.id}>
                <Radio value={genre["genre_id"]} colorScheme='orange'>{genre["name"]}</Radio>
              </GridItem>
            ))}
          </Grid>
        </RadioGroup>
      ) : (
        <Center align="center">
          <Spinner />
        </Center>
      )
      }
    </FormControl >
  );
};
