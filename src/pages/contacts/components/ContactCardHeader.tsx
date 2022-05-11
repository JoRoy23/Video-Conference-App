import React from "react";
import styled from "styled-components";
import { getFullName } from "../../../config/config";
import { IContact } from "../../../data/contacts";

interface IContactCardHeader {
  contactSelected: IContact;
};

const ContactCardHeader = ({ contactSelected }: IContactCardHeader) => {
  return (
    <StyledContactCardHeader>
      <Avatar src={contactSelected.avatar} alt="Contact avatar" />
      <ContactFullName>{getFullName(contactSelected)}</ContactFullName>
    </StyledContactCardHeader>
  );
};

export default ContactCardHeader;

const StyledContactCardHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: var(--grey-border);
`;

const Avatar = styled.img.attrs(props => ({
  width: "100px",
  height: "100px",
}))`
  display: block;
`;

const ContactFullName = styled.h1`
  color: var(--light-grey);
`;