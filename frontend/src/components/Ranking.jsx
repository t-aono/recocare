import { useHistory, useLocation, Link } from "react-router-dom";
import useSWR from "swr";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/spinner";
import { Table, Tbody, Td, Tr } from "@chakra-ui/table";

import styles from "../MainStyles.module.css";

export const Ranking = () => {
  const history = useHistory();
  const location = useLocation();

  let url = `${process.env.REACT_APP_BACKEND_HOST}api/ranking`;
  // for (let key in location.state) {
  //   let value = encodeURI(location.state[key]);
  //   url += `${key}=${value}&`;
  // }
  console.log(location);
  return "";

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
                    <Link
                      to={`/product/${item.product[5]}`}
                      className={styles.productLink}
                    >
                      【p: {item.points}】　{item.product[0]}
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
