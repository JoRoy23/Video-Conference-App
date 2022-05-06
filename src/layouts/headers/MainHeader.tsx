import React from "react";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <StyledMainHeader>MainHeader</StyledMainHeader>
  )
}

export default MainHeader;

const StyledMainHeader = styled.header`
    grid-area: mainHeader;
    border: 1px solid green; 
`;
