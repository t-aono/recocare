import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Box, Center, Flex, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { SkeletonText } from "@chakra-ui/skeleton";
import { Image } from "@chakra-ui/image";
import { ArrowBackIcon } from "@chakra-ui/icons";

import styles from "../MainStyles.module.css";

export const Ranking = () => {
  const history = useHistory();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [paginate, setPaginate] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const url = useMemo(
    () => `${process.env.REACT_APP_BACKEND_HOST}api/ranking`,
    []
  );

  let paramData = useMemo(() => {
    return {
      genre: location.state.genre,
      effects: location.state.effects,
      price: location.state.price,
      currentPage: currentPage,
      perPage: process.env.REACT_APP_ITEM_PER_PAGE
    };
  }, [location, currentPage]);
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
        setPaginate(json.paginate);
      })
      .catch((err) => setError(err));
  }, [url, param]);


  const changePage = (page) => {
    console.log(page)
    // setCurrentPage(page);
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
        <Center as="h1" my="3" fontSize="1.5em">
          おすすめランキング
        </Center>
        {error ? error : ""}
        {data.length === 0 ? (
          <Center my="10">該当なし</Center>
        ) : (
          <>
            {data.map((item, index) => (
              <Flex key={index} mt={7} mb={10}>
                <Box className={styles.flexGrow}>
                  <Image
                    src={item.image_url}
                    fallbackSrc='https://via.placeholder.com/150'
                    alt={item.name}
                    objectFit="contain"
                    w="100%"
                    h="10em"
                    borderRadius="lg"
                  />
                </Box>
                <Box ml="5" w="70%">
                  <Box>{index + 1} 位</Box>
                  <Box>{item.name}</Box>
                  <Flex>
                    <Box fontSize="sm">
                      {item.price.toLocaleString("ja-JP", {
                        style: "currency",
                        currency: "JPY",
                      })}
                    </Box>
                    <Spacer />
                    <Box fontSize="sm">{item.point} points</Box>
                  </Flex>
                  <Center>
                    <Link to={"/product/" + item.id}>
                      <Button colorScheme="teal" size="sm" variant="outline">
                        詳細を見る
                      </Button>
                    </Link>
                  </Center>
                </Box>
              </Flex>
            ))}
            < Center >
              {paginate.current_page != 1 ? <Link> 前へ</Link> : ''}
              {paginate.current_page < paginate.last_page ? <Link onClick={() => changePage(paginate.current_page + 1)}> 次へ</Link> : ''}
            </Center>
          </>
        )}
        <Center mt="10">
          <Button
            size="lg"
            variant="link"
            mb="10"
            onClick={goBack}
          >
            <ArrowBackIcon w="7" h="7" />
            戻る
          </Button>
        </Center>
      </Box>
    </>
  );
};
