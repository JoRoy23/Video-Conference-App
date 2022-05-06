import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MainHeader from "../headers/MainHeader";
import MainNavigation from "../navigations/MainNavigation";

const MainLayout = () => {
  return (
    <StyledMainLayout>
        <MainHeader />
        <MainNavigation />
        <Outlet />
    </StyledMainLayout>
  )
}

export default MainLayout;

const StyledMainLayout = styled.main`
    display: grid;
    grid-template-columns: 7rem 1fr;
    grid-template-rows: 7rem 1fr;
    grid-template-areas: 
    "mainNavigation mainHeader"
    "mainNavigation content";
    height: 100vh;
    overflow: hidden;
    border: 1px solid red;
`;