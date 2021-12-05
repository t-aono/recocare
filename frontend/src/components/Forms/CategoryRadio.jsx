import { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";

import styles from "../../MainStyles.module.css";

export const CategoryRadio = (props) => {
  const { category, setCategory } = props;

  const onChangeRadio = (e) => setCategory(e);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}api/genre`)
      .then((res) => setGenres(res.data));
  }, []);

  return (
    <FormControl as="fieldset" isRequired mt="5">
      <FormLabel as="legend" className={styles.questionTitle}>
        カテゴリ
      </FormLabel>
      {/* <Radio value="クレンジング">クレンジング</Radio> */}
      {genres.length > 0 &&
        genres.map((genre) => (
          <RadioGroup
            value={category}
            onChange={(e) => onChangeRadio(e)}
            key={genre["id"]}
          >
            <HStack spacing="24px">
              <Radio value={genre["id"]}>{genre["genre_name"]}</Radio>
            </HStack>
          </RadioGroup>
        ))}
    </FormControl>
  );
};
