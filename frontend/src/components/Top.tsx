import useSWR from "swr";
import { Box } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import { Center } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import styles from "../MainStyles.module.css";
import CosmeImage from "../images/cosme.png";
import ReadingSvg from "../svgs/undraw_reading.svg";
import CrackerSvg from "../svgs/cracker.svg";

export const Top = () => {
  const url = `${process.env.REACT_APP_BACKEND_HOST}api/count`;
  const fetcher = (arg: string): Promise<number> => fetch(arg).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  if (error) return <Center>データのアクセスに失敗しました。</Center>;

  return (
    <>
      <Center className={styles.topMessage}>
        <Box as="h1" fontSize="1.1em">
          お気に入りスキンケアを見つけよう
        </Box>
      </Center>
      <Box my="20" position="relative" left="50%" transform="translateX(-50%)" w="100vw">
        <Image src={CosmeImage} h="80vw" maxH="800px" objectFit="cover" m="0 auto" />
      </Box>
      {data ? (
        <Center>
          <Image src={CrackerSvg} w="14" />
          <Box fontSize="xl">登録商品数 {data.toLocaleString()} 点</Box>
          <Image src={CrackerSvg} w="14" />
        </Center>
      ) : (
        ""
      )}
      <Center>
        <Box>商品随時追加中！</Box>
      </Center>
      <Box lineHeight="2.5em" mt="6em">
        どれが自分に自分にあっているか分からない。
        <br />
        商品があり過ぎて探すのが疲れる。
        <br />
        悩みを解消できる商品を効率的に見つけたい。
        <br />
        <br />
        そのように考えた事はありませんか？
        <br />
        ３つの質問に答えるだけで、あなたの合わせたランキングを紹介します!
      </Box>
      <Box mt="20" mb="7em">
        <Image src={ReadingSvg} />
      </Box>
      <Center>
        <Link to="/question">
          <Button className={styles.primaryBtn} colorScheme="red500" height="65px" width="200px" size="lg">
            やってみる
          </Button>
        </Link>
      </Center>
      <Box mt="7em" position="relative" left="50%" transform="translateX(-50%)" w="100vw">
        <Image src={CosmeImage} h="80vw" maxH="800px" objectFit="cover" m="0 auto" />
      </Box>
    </>
  );
};
