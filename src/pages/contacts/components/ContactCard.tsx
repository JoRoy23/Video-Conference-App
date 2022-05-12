import React from "react";
import styled from "styled-components";
import { IContact } from "../../../data/contacts";
import ContactCardHeader from "./ContactCardHeader";
import ContactCardActions from "./ContactCardActions";
import ContactCardInfo from "./ContactCardInfo";

interface IContactCard {
  contactSelected: IContact;
};

const ContactCard = ({ contactSelected }: IContactCard) => {
  return (
    <StyledContactCard>
      <ContactCardHeader contactSelected={contactSelected}/>
      <ContactCardActions/>
      <ContactCardInfo contactSelected={contactSelected}/>
    </StyledContactCard>
  );
};

export default ContactCard;

const StyledContactCard = styled.div`
  height: 100%;
  padding: 3rem;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;
  border-radius: 1.2rem;
  background-color: var(--light-black);

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