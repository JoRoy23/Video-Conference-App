import React from "react";
import styled from "styled-components";
import { IContact } from "../../../data/contacts";
import NoContactSelected from "./NoContactSelected";

interface IRightPanel {
  contactSelected: IContact | null;
};

const RightPanel = ({ contactSelected }: IRightPanel) => {
  return (
    <StyledRightPanel contactSelected={contactSelected}>
      {contactSelected ? (
        null
      ) : (
        <NoContactSelected />
      )}
    </StyledRightPanel>
  );
};

export default RightPanel;

const StyledRightPanel = styled.div<{ contactSelected: IContact | null}>`
  flex: 1 0 60%;
  display: ${props => props.contactSelected ? "block" : "flex"};
  align-items: center;
  justify-content: center;
  padding: 5rem 3.8rem 5rem 5rem;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 1.2rem;
    height: 1.2rem;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 10rem;
    border: 0.3rem solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    background-clip: padding-box;
  }
`;