import React from 'react'
import styled from "styled-components";

const MainNavigation = () => {
  return (
    <StyledMainNavigation>MainNavigation</StyledMainNavigation>
  )
}

export default MainNavigation;

const StyledMainNavigation = styled.nav`
  grid-area: mainNavigation;
  border: 1px solid blue; 
`;