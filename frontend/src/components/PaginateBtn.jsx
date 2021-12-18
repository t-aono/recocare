import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Box, Link } from "@chakra-ui/react";

export const PaginateBtn = (props) => {
  const { currentPage, lastPage, changePage } = props;

  return (
    <Flex justifyContent="space-between">
      {currentPage !== 1 ? <Link onClick={() => changePage(currentPage - 1)}><ChevronLeftIcon w='7' h='7' />前へ</Link> : <Box></Box>}
      {currentPage < lastPage ? <Link onClick={() => changePage(currentPage + 1)}>次へ<ChevronRightIcon w='7' h='7' /></Link> : <Box></Box>}
    </Flex>
  );
}