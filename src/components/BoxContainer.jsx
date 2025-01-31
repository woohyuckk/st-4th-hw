import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

function BoxContainer() {
  const [activeIndexList, setActiveIndexList] = useState([]);

  const handleClick = (index) => {
    if (activeIndexList.some((element) => element === index)) {
      const filtredActiveIndexList = activeIndexList.filter(
        (number) => number !== index
      );
      setActiveIndexList(filtredActiveIndexList);
    } else {
      setActiveIndexList([...activeIndexList, index]);
    }
  };

  return (
    <Container>
      {/* TODO: active prop 을 어떻게 해야 클릭한 박스임을 알수있을 지 active prop에 할당할 값을 수정해보세요. */}
      {Array.from({ length: 5 }, (_, index) => index).map((index) => (
        <Box
          key={index}
          active={activeIndexList.includes(index)}
          onClick={() => handleClick(index)}
        >
          {" "}
          {index}
        </Box>
      ))}
    </Container>
  );
}

export default BoxContainer;
