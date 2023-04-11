import { useState } from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { ColumnGraph } from "../Graphs/ColumnGraph";
import { LineGraph } from "../Graphs/LineGraph";

export const Carousel = () => {
  const elements = [<ColumnGraph />, <LineGraph />];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % elements.length);
  };

  const handlePreviousClick = () => {
    setCurrentIndex((currentIndex - 1 + elements.length) % elements.length);
  };

  return (
    <Flex w={"100%"} h={"50%"} flexDirection={"row"} justifyContent={"center"}>
      <Flex w={"5%"} justifyContent={"center"} alignItems={"center"}>
        <IconButton
          aria-label="Search database"
          onClick={handlePreviousClick}
          icon={<AiFillCaretLeft />}
          bg={"white"}
          color={"primary"}
        />
      </Flex>

      <Flex w={"80%"}>{elements[currentIndex]}</Flex>

      <Flex w={"5%"} justifyContent={"center"} alignItems={"center"}>
        <IconButton
          aria-label="Search database"
          onClick={handleNextClick}
          icon={<AiFillCaretRight />}
          bg={"white"}
          color={"primary"}
        />
      </Flex>
    </Flex>
  );
};
