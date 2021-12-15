import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { SkeletonText } from "@chakra-ui/skeleton";
import { Image } from "@chakra-ui/image";
import { ArrowBackIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import styles from "../MainStyles.module.css";
import { PaginateBtn } from "./PaginateBtn";
import Logo from '..//images/logo.png';

export const Ranking = () => {
  const history = useHistory();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);
  const [error, setError] = useState(null);

  const url = useMemo(
    () => `${process.env.REACT_APP_BACKEND_HOST}api/ranking`,
    []
  );

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
        setCurrentData(json.data.slice(0, process.env.REACT_APP_ITEM_PER_PAGE));
        setLastPage(Math.floor(json.data.length / process.env.REACT_APP_ITEM_PER_PAGE))
      })
      .catch((err) => setError(err));
  }, [url, param]);

  const changePage = (page) => {
    let current = [];
    for (let key in data) {
      if (key > (page - 1) * process.env.REACT_APP_ITEM_PER_PAGE && key <= page * process.env.REACT_APP_ITEM_PER_PAGE) current.push(data[key]);
    }
    setCurrentData(current);

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
        {error ? error : ""}
        {data.length === 0 ? (
          <Center my="10">該当なし</Center>
        ) : (
          <>
            <Box fontSize={'sm'} mt='5'>
              {data.length}件ヒットしました!
            </Box>
            <Box mt='3'>
              <PaginateBtn currentPage={currentPage} lastPage={lastPage} changePage={changePage} />
            </Box>
            <Box borderBottom='solid 1px #ccc' w='6em' textAlign='center' fontSize='sm'>
              {(currentPage - 1) * process.env.REACT_APP_ITEM_PER_PAGE + 1}
              〜
              {currentPage * process.env.REACT_APP_ITEM_PER_PAGE} 位
            </Box>
            {currentData.map((item, index) => (
              <Flex key={index} mt={3} mb={15}>
                <Box className={styles.flexGrow}>
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
                <Box ml="5" w="70%">
                  <Box fontWeight='bold'>{(currentPage - 1) * process.env.REACT_APP_ITEM_PER_PAGE + index + 1} 位</Box>
                  <Box>{item.name}</Box>
                  <Box fontSize="sm" my='1'>
                    {item.price.toLocaleString("ja-JP", {
                      style: "currency",
                      currency: "JPY",
                    })}
                  </Box>
                  <Box fontSize="sm" my='1'>{item.point} points</Box>
                  <Center>
                    <Link to={"/product/" + item.id}>
                      <Button colorScheme="red" size="sm" variant="outline">
                        詳細を見る
                      </Button>
                    </Link>
                  </Center>
                </Box>
              </Flex>
            ))}
            <Box mt='10'>
              <PaginateBtn currentPage={currentPage} lastPage={lastPage} changePage={changePage} />
            </Box>
            <Center mt='10'>
              <Box lineHeight='1.8em'><InfoOutlineIcon w='5' h='5' mr='1' />points は独自の計算式によって算出しています。大きいほどご要望にマッチしています。</Box>
            </Center>
          </>
        )}
        <Center my="5em">
          <Button
            variant='link'
            onClick={goBack}
          >
            <ArrowBackIcon w="5" h="5" verticalAlign='sub' fontSize='sm' />
            アンケートフォームへ戻る
          </Button>
        </Center>
      </Box>
    </>
  );
};
