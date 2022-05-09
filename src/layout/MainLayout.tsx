import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MainHeader from "./header/MainHeader";
import MainNavigation from "./navigation/MainNavigation";

const MainLayout = () => {
  return (
    <StyledMainLayout>
        <MainHeader />
        <MainNavigation />
        <MainContent>
          <Outlet />
        </MainContent>
    </StyledMainLayout>
  )
}

export default MainLayout;

const StyledMainLayout = styled.main`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    "mainNavigation mainHeader"
    "mainNavigation mainContent";
    height: 100vh;
    overflow: hidden;
`;

const MainContent = styled.div`
  grid-area: mainContent;
  overflow: hidden;
  background-color: var(--dark-black);
`;