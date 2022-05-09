import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import DotsIcon from "../../assets/icons/dots.svg";

const MoreOptionsButton = () => {
  const handleMoreOptionsClick = () => {
    console.log("more options clicked");
  };

  return (
    <StyledMoreOptionsButton onClick={handleMoreOptionsClick}>
      <ReactSVG src={DotsIcon}/>
    </StyledMoreOptionsButton>
  );
};

export default MoreOptionsButton;

const StyledMoreOptionsButton = styled.button.attrs(props => ({
  type: "button"
}))`
  padding: 1.5rem;
  border-radius: 1rem;
  border: var(--grey-border);
  background-color: var(--light-black);
  cursor: pointer;

  .injected-svg {
    display: block;
  }
`;