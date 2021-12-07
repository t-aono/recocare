import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";
import { Table, Tbody, Td, Tr } from "@chakra-ui/table";

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
      effects: location.state.effect,
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

  if (error) return <Center>データのアクセスに失敗しました。</Center>;
  if (data.length === 0 && !error)
    return (
      <Center align="center" h="100vh">
        <Spinner />
      </Center>
    );

  return (
    <>
      <Box className={styles.mainFontColor} w="100%">
        <Heading as="h3" my="3">
          ランキング
        </Heading>
        {error ? error : ""}
        {data === "no-data" ? (
          <Center my="10">該当なし</Center>
        ) : (
          <Table my="8">
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{index + 1} 位</Td>
                  <Td>
                    <Link to="" className={styles.productLink}>
                      【p: {item.point}】　{item.name}
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
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
