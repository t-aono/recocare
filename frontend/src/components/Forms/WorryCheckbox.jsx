import useSWR from "swr";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";

import styles from "../../MainStyles.module.css";

export const WorryCheckbox = (props) => {
  const { worry, setWorry } = props;

  const onChangeCheckbox = (e) => setWorry(e);

  const url = `${process.env.REACT_APP_BACKEND_HOST}api/effect`;
  const fetcher = (arg) => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  if (error) return <Center>データのアクセスに失敗しました。</Center>;

  return (
    <FormControl as="fieldset" mt="5">
      <FormLabel as="legend" className={styles.questionTitle}>
        お悩み
      </FormLabel>
      {data ? (
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          value={worry}
          onChange={onChangeCheckbox}
        >
          {data.map((effect) => (
            <GridItem spacing="24px" key={effect["id"]}>
              <Checkbox value={effect["id"]}>{effect["name"]}</Checkbox>
            </GridItem>
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
