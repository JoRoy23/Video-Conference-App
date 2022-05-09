import React, {useContext} from "react";
import styled from "styled-components";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";
import Avatar from "../../assets/images/profil-avatar.svg";

const MainHeader = () => {
  const {mainHeaderTitle} = useContext(MainHeaderContext)!;

  return (
    <StyledMainHeader>
      <HeaderTitle>{mainHeaderTitle}</HeaderTitle>
      <ProfilAvatar src={Avatar} alt="profil avatar"/>
    </StyledMainHeader>
  )
}

export default MainHeader;

const StyledMainHeader = styled.header`
  grid-area: mainHeader;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.3rem 3rem 2.3rem 5rem;
  border-bottom: var(--grey-border); 
  background-color: var(--dark-black);

  .injected-svg {
    display: block;
  }
`;

const HeaderTitle = styled.h2`
  color: var(--white);
`;

const ProfilAvatar = styled.img.attrs(props => ({
  width: "48px",
  height: "48px",
}))``;