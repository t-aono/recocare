import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export const PaginateBtn = (props) => {
  const { currentPage, lastPage, changePage } = props;

  return (
    < Center gridColumnGap="20">
      {currentPage !== 1 ? <Link onClick={() => changePage(currentPage - 1)}><ChevronLeftIcon w='5' h='5' verticalAlign='sub' />前へ</Link> : ''}
      {currentPage < lastPage ? <Link onClick={() => changePage(currentPage + 1)}>次へ<ChevronRightIcon w='5' h='5' verticalAlign='sub' /></Link> : ''}
    </Center>
  );
}