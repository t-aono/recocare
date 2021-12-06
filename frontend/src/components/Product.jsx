import { useHistory, useParams } from "react-router";
import useSWR from "swr";
import { Box, Center, Heading, StackDivider, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";

import styles from "../MainStyles.module.css";

export const Product = () => {
  const history = useHistory();
  const params = useParams();

  let url = `http://samp20.starfree.jp/cosmetic-rank-data/getjan.php?jan=${params.jan}`;

  const fetcher = (arg) =>
    fetch(arg, { mode: "cors" }).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

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
        {data === "no-data" ? (
          <Center my={8}>該当データがありません。</Center>
        ) : (
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
            my={8}
          >
            {data.map((da) => (
              <Box h="10px">{da}</Box>
            ))}
          </VStack>
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
