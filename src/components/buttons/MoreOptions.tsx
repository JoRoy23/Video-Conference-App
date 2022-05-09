import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import DotsIcon from "../../assets/icons/dots.svg";

const MoreOptions = () => {
  const handleMoreOptionsClick = () => {
    console.log("more options clicked");
  };

  return (
    <StyledMoreOptions onClick={handleMoreOptionsClick}>
        <ReactSVG src={DotsIcon}/>
    </StyledMoreOptions>
  );
};

export default MoreOptions;

const StyledMoreOptions = styled.button.attrs(props => ({
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