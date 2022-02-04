import { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Link as CLink } from "@chakra-ui/layout";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { SkeletonText } from "@chakra-ui/skeleton";
import { Image } from "@chakra-ui/image";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { PaginateBtn } from "./PaginateBtn";
import Logo from "..//images/logo.png";
import Ranking1 from "../svgs/ranking1.svg";
import Ranking2 from "../svgs/ranking2.svg";
import Ranking3 from "../svgs/ranking3.svg";

type Location = {
  genre: string;
  price: string;
  effects: string[];
  genreName: string;
  effectNames: string[];
};

type History =
  | string
  | {
      genre: string;
      effects: string[];
      price: string;
    };

type Item = {
  id: string;
  name: string;
  small_image_url: string;
  recommend: {
    effective: string;
    ingredient: string;
  }[];
  price: number;
};

export const Ranking = () => {
  const history = useHistory<History>();
  const location = useLocation<Location>();
  const itemPerPage: number = parseInt(process.env.REACT_APP_ITEM_PER_PAGE as string, 10);

  const [data, setData] = useState<Item[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>();
  const [error, setError] = useState(null);

  const url = useMemo(() => `${process.env.REACT_APP_BACKEND_HOST}api/ranking`, []);

  const paramData = useMemo(() => {
    return {
      genre: location.state.genre,
      effects: location.state.effects,
      price: location.state.price,
    };
  }, [location]);
  const param = useMemo(() => {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(paramData),
    };
  }, [paramData]);

  useEffect(() => {
    fetch(url, param)
      .then((res) => res.json())
      .then((json) => {
        setError(json.error);
        setData(json.data);
        setItems(json.data.slice(0, itemPerPage));
        setLastPage(Math.floor(json.data.length / itemPerPage));
      })
      .catch((err) => setError(err));
  }, [url, param, itemPerPage]);

  const changePage = (page: number) => {
    let current: Item[] = [];
    for (let key in data) {
      const index = parseInt(key, 10) as number;
      if (index > (page - 1) * itemPerPage && index <= page * itemPerPage) current.push(data[key]);
    }
    setItems(current);

    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    history.push({
      pathname: "/question",
      state: {
        genre: location.state.genre,
        effects: location.state.effects,
        price: location.state.price,
      },
    });
  };

  if (error) return <Center>データのアクセスに失敗しました。</Center>;

  if (data.length === 0 && !error)
    return (
      <Box>
        <Center>ランキング作成中です…</Center>
        {[...Array(10)].map((value, index) => (
          <SkeletonText
            key={index}
            mt="10"
            mb="10"
            pt="5"
            pb="5"
            startColor="red.300"
            endColor="red.100"
          ></SkeletonText>
        ))}
      </Box>
    );

  return (
    <>
      <Box>
        <Center as="h1" fontSize="xl">
          おすすめランキング
        </Center>
        <Box fontSize="sm" my="5">
          <Box fontWeight="bold">回答内容</Box>
          <Flex mx="1">
            <Box w="5em">カテゴリ：</Box>
            <Box>{location.state.genreName}</Box>
          </Flex>
          <Flex mx="1">
            <Box w="5em">悩み：</Box>
            <Box>{location.state.effectNames.join("/")}</Box>
          </Flex>
          <Flex mx="1">
            <Box w="5em">ご予算：</Box>
            <Box>
              〜
              {Number(location.state.price).toLocaleString("ja-JP", {
                style: "currency",
                currency: "JPY",
              })}
            </Box>
          </Flex>
        </Box>
        {error ? error : ""}
        {data.length === 0 ? (
          <Center my="10">該当なし</Center>
        ) : (
          <>
            <Box fontSize={"sm"} mt="2">
              {data.length}件ヒットしました!
            </Box>
            <Box my="3">
              <PaginateBtn currentPage={currentPage} lastPage={lastPage!} changePage={changePage} />
            </Box>
            <Box borderBottom="solid 1px #ccc" w="6em" textAlign="center" mx="auto" fontSize="sm">
              {(currentPage - 1) * itemPerPage + 1}〜{currentPage * itemPerPage} 位
            </Box>
            {items.map((item, index) => (
              <Center key={index} my="12" maxW="30em" mx="auto">
                <Box ml="5" maxW="30em">
                  <Flex mb="2" justifyContent="space-between" alignItems="center">
                    {currentPage === 1 && index === 0 ? (
                      <Box>
                        <Image w="12" h="12" src={Ranking1} />
                      </Box>
                    ) : currentPage === 1 && index === 1 ? (
                      <Box>
                        <Image w="10" h="10" src={Ranking2} />
                      </Box>
                    ) : currentPage === 1 && index === 2 ? (
                      <Box>
                        <Image w="10" h="10" src={Ranking3} />
                      </Box>
                    ) : (
                      <Box fontWeight="bold">{(currentPage - 1) * itemPerPage + index + 1} 位</Box>
                    )}
                  </Flex>
                  <Box>{item.name}</Box>
                  <Box textAlign="right">
                    <Link to={"/product/" + item.id}>
                      <Button colorScheme="orange" size="sm" variant="link">
                        詳細を見る
                      </Button>
                    </Link>
                  </Box>
                  <Box mt="3" mb="1">
                    <Image
                      src={item.small_image_url}
                      fallbackSrc={Logo}
                      alt={item.name}
                      objectFit="contain"
                      w="100%"
                      h="10em"
                      borderRadius="lg"
                    />
                  </Box>
                  {item.recommend.map((row, i) => (
                    <Box key={row.ingredient + i} my="3">
                      <Box
                        display="inline"
                        background="gray.400"
                        fontWeight="bold"
                        color="#fff"
                        py="1"
                        px="3"
                        mr="1"
                        borderRadius="full"
                      >
                        {row.effective}
                      </Box>
                      の対策におすすめ
                      <br />
                      <Box display="inline" borderBottom="2px solid orange">
                        {row.ingredient}
                      </Box>{" "}
                      配合
                    </Box>
                  ))}
                  <Box fontSize="sm" float="right">
                    {item.price.toLocaleString("ja-JP", {
                      style: "currency",
                      currency: "JPY",
                    })}
                  </Box>
                </Box>
              </Center>
            ))}
            <Box mt="10">
              <PaginateBtn currentPage={currentPage} lastPage={lastPage!} changePage={changePage} />
            </Box>
          </>
        )}
        <Center my="5em">
          <CLink variant="link" onClick={goBack}>
            <ArrowBackIcon w="5" h="5" verticalAlign="sub" fontSize="sm" />
            アンケートフォームへ戻る
          </CLink>
        </Center>
      </Box>
    </>
  );
};
