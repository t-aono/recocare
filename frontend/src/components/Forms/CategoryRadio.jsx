import useSWR from "swr";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { Grid, GridItem } from "@chakra-ui/react";

import styles from "../../MainStyles.module.css";

export const CategoryRadio = (props) => {
  const { category, setCategory } = props;

  const onChangeRadio = (e) => setCategory(e);

  const url = `${process.env.REACT_APP_BACKEND_HOST}api/genre`;
  const fetcher = (arg) => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  if (error) return <Center>データのアクセスに失敗しました。</Center>;

  return (
    <FormControl as="fieldset" isRequired mt="5">
      <FormLabel as="legend" className={styles.questionTitle}>
        カテゴリ
      </FormLabel>
      {data ? (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map((genre) => (
            <RadioGroup
              value={category}
              onChange={(e) => onChangeRadio(e)}
              key={genre["id"]}
            >
              <HStack spacing="24px">
                <Radio value={genre["genre_id"]}>{genre["name"]}</Radio>
              </HStack>
            </RadioGroup>
          ))}
        </Grid>
      ) : (
        <Center align="center">
          <Spinner />
        </Center>
      )}
    </FormControl>
  );
};
