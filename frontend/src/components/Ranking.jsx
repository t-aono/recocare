import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { SkeletonText } from "@chakra-ui/skeleton";
import { Image } from "@chakra-ui/image";
import { ArrowBackIcon } from "@chakra-ui/icons";

import styles from "../MainStyles.module.css";

export const Ranking = () => {
  const history = useHistory();
  const location = useLocation();

  const url = useMemo(
    () => `${process.env.REACT_APP_BACKEND_HOST}api/ranking`,
    []
  );

  const ansewer = useMemo(() => {
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
      body: JSON.stringify(ansewer),
    };
  }, [ansewer]);

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, param)
      .then((res) => res.json())
      .then((json) => {
        setError(json.error);
        setData(json.data);
      })
      .catch((err) => setError(err));
  }, [url, param]);

  const goBack = () => {
    history.push({
      pathname: "/",
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
        {[...Array(10)].map(() => (
          <SkeletonText
            mt="10"
            mb="10"
            pt="5"
            pb="5"
            startColor="teal.300"
            endColor="teal.100"
          ></SkeletonText>
        ))}
      </Box>
    );

  return (
    <>
      <Box className={styles.mainFontColor} w="100%">
        <Heading as="h3" my="3">
          ランキング
        </Heading>
        {error ? error : ""}
        {data.length === 0 ? (
          <Center my="10">該当なし</Center>
        ) : (
          data.map((item, index) => (
            <Flex key={index} mt={7} mb={10}>
              <Box className={styles.flexGrow}>
                <Image
                  src={item.image_url}
                  alt={item.name}
                  objectFit="contain"
                  w="100%"
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
          ))
        )}
        <Center mt="10">
          <Button
            colorScheme="teal"
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
