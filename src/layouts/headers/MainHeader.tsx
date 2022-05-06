import React, {useContext} from "react";
import styled from "styled-components";
import { IMainHeaderContext, MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";

const MainHeader = () => {
  const {mainHeaderTitle} = useContext(MainHeaderContext) as IMainHeaderContext;

  return (
    <StyledMainHeader>{mainHeaderTitle}</StyledMainHeader>
  )
}

export default MainHeader;

const StyledMainHeader = styled.header`
    grid-area: mainHeader;
    border: 1px solid green; 
`;
