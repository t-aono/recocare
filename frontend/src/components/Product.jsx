import { useHistory, useParams } from "react-router-dom";
import { Link } from '@chakra-ui/react'
import useSWR from "swr";
import { Box, Center, Heading, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { SkeletonText } from "@chakra-ui/skeleton";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import styles from "../MainStyles.module.css";
import { Image } from "@chakra-ui/image";

export const Product = () => {
  const history = useHistory();
  const { id } = useParams();

  const url = `${process.env.REACT_APP_BACKEND_HOST}api/product/${id}`;
  const fetcher = (arg) => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  let createdDate = "";
  if (data && data.created_at) {
    const date = new Date(data.created_at);
    createdDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  }

  if (error) return <Center>データのアクセスに失敗しました。</Center>;
  if (!data)
    return (
      <SkeletonText
        mt="10"
        mb="10"
        pt="5"
        pb="5"
        startColor="teal.300"
        endColor="teal.100"
      ></SkeletonText>
    );

  return (
    <>
      <Box className={styles.mainFontColor} w="100%">
        <Heading as="h3" my="3">
          商品紹介
        </Heading>
        <Flex mt={7} mb={10}>
          <Box className={styles.flexGrow}>
            <Image
              src={data.image_url}
              alt={data.name}
              objectFit="contain"
              w="100%"
              borderRadius="lg"
            />
          </Box>
          <Box ml="5" w="70%">
            <Box fontWeight="bold">商品名</Box>
            <Box>{data.name}</Box>
            <Flex justifyContent="space-between" pt="5">
              <Box>
                <Box fontWeight="bold">価格</Box>
                <Box fontSize="sm">
                  {data.price.toLocaleString("ja-JP", {
                    style: "currency",
                    currency: "JPY",
                  })}
                </Box>
              </Box>
              <Box>
                <Box fontWeight="bold">登録日</Box>
                <Box>{createdDate}</Box>
              </Box>
              <Box>
                <Link href={data.rakuten_url} isExternal={true} >
                  <Button colorScheme="red" variant="outline">
                    楽天で見る
                    <ExternalLinkIcon mx='2px' />
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box fontWeight="bold">商品説明</Box>
        <Box>{data.caption}</Box>
      </Box>
      <Center mt="10">
        <Button
          colorScheme="teal"
          size="lg"
          mb="10"
          variant="link"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon w="7" h="7" />
          戻る
        </Button>
      </Center>
    </>
  );
};
