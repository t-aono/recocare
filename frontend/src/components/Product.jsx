import { useHistory, useParams } from "react-router-dom";
import { Link } from '@chakra-ui/react'
import useSWR from "swr";
import { Box, Center, Flex } from "@chakra-ui/layout";
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
        startColor="red.300"
        endColor="red.100"
      ></SkeletonText>
    );

  return (
    <>
      <Box>
        <Center as="h1" fontSize="xl">
          商品詳細
        </Center>
        <Box mt='5' fontWeight="bold">商品名</Box>
        <Box>{data.name}</Box>
        <Box p='10' className={styles.flexGrow}>
          <Image
            src={data.medium_image_url}
            alt={data.name}
            objectFit="contain"
            w="100%"
          />
        </Box>
        <Box>
          <Box fontWeight="bold">価格</Box>
          <Box>
            {data.price.toLocaleString("ja-JP", {
              style: "currency",
              currency: "JPY",
            })}
          </Box>
        </Box>
        <Box mt='3'>
          <Box fontWeight="bold">登録日</Box>
          <Box>{createdDate}</Box>
        </Box>
        <Box my='5' textAlign={'center'}>
          <Link href={data.rakuten_url} isExternal={true} >
            <Button colorScheme="red" variant="outline">
              楽天で見る
              <ExternalLinkIcon mx='2px' />
            </Button>
          </Link>
        </Box>
        <Box fontWeight="bold">商品説明</Box>
        <Box>{data.caption}</Box>
      </Box>
      <Center mt="10">
        <Button
          colorScheme="gray"
          size="lg"
          mb="10"
          variant="link"
          onClick={() => history.goBack()}
        >
          <ArrowBackIcon w="7" h="7" />
          ランキングに戻る
        </Button>
      </Center>
    </>
  );
};
