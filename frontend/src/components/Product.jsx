import { useHistory, useParams } from "react-router";
import useSWR from "swr";
import { Box, Center, Heading, StackDivider, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";

import styles from "../MainStyles.module.css";
import { Image } from "@chakra-ui/image";

export const Product = () => {
  const history = useHistory();
  const { id } = useParams();

  const url = `${process.env.REACT_APP_BACKEND_HOST}api/product/${id}`;
  const fetcher = (arg) => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  console.log(data, error)

  if (error) return <Center>データのアクセスに失敗しました。</Center>;
  if (!data)
    return (
      <Center align="center" h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <>
      <Box className={styles.mainFontColor} w="100%">
        <Heading as="h3" my="3">
          商品紹介ページ
        </Heading>
        {data.length === 0 ? (
          <Center my={8}>該当データがありません。</Center>
        ) : (
          <Box>
            <Image
              src={data.image_url}
              alt={data.name}
              objectFit="contain"
              w="100%"
              borderRadius="lg"
            />

            <Box h="10px">{data.name}</Box>
          </Box>
        )}
      </Box>
      <Center mt="10">
        <Button
          colorScheme="teal"
          size="lg"
          variant="ghost"
          onClick={() => history.goBack()}
        >
          戻る
        </Button>
      </Center>
    </>
  );
};
