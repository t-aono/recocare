import useSWR from "swr";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/checkbox";
import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";

export const WorryCheckbox = (props) => {
  const { worry, setWorry, setWorries } = props;

  const onChangeCheckbox = (e) => {
    const index = worry.indexOf(e.target.value);
    let checked = [];
    if (index < 0) {
      checked = [...worry, e.target.value];
      setWorry(checked);
    } else {
      checked = worry;
      checked.splice(index, 1);
      setWorry([...checked]);
    }
  };

  const url = `${process.env.REACT_APP_BACKEND_HOST}api/effect`;
  const fetcher = (arg) => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) setWorries(data);
  }, [data, setWorries])
  if (error) return <Center>データのアクセスに失敗しました。</Center>;

  return (
    <FormControl isRequired mt="5">
      <FormLabel as="legend" mb='5' borderBottom='solid 1px #ccc'>
        スキンケアに関してお悩みはありますか？
      </FormLabel>
      {data ? (
        <Grid templateColumns="repeat(2, 1fr)" columnGap={1} rowGap={3} >
          {data.map((effect) => (
            <GridItem
              key={effect["id"]}
              value={worry}
            >
              <Checkbox
                colorScheme='orange'
                value={effect["id"]}
                onChange={onChangeCheckbox}
                isChecked={worry.includes(String(effect["id"]))}
              >
                {effect["name"]}
              </Checkbox>
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
