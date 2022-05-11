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
  border-radius: 1.2rem;
  background-color: var(--light-black);
`;