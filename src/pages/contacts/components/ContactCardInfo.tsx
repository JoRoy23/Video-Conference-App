import React from "react";
import styled from "styled-components";
import { IContact } from "../../../data/contacts";

interface IContactCardInfo {
  contactSelected: IContact;
};

const ContactCardInfo = ({ contactSelected }: IContactCardInfo) => {
  return (
    <StyledContactCardInfo>
      <Title>Contact's Info</Title>
      <Info></Info>
    </StyledContactCardInfo>
  );
};

export default ContactCardInfo;

const StyledContactCardInfo = styled.div`
  margin-top: 6rem;
`;

const Title = styled.h2`
  padding-bottom: 3rem;
  color: var(--light-grey);
  border-bottom: var(--grey-border);
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 6rem;
  column-gap: 11.5rem;

`;