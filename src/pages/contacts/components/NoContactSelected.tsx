import React from "react";
import styled from "styled-components";
import ContactBookImg from "../../../assets/images/contacts-book.svg";

const NoContactSelected = () => {
  return (
    <StyledNoContactSelected>
      <ContactsBook src={ContactBookImg} alt="Contacts book"/>
      <Title>Contact</Title>
      <Text>View contact by clicking a contact in the left panel</Text>
    </StyledNoContactSelected>
  );
};

export default NoContactSelected;

const StyledNoContactSelected = styled.section``;

const ContactsBook = styled.img.attrs(props => ({
  width: "115px",
  height: "140px",
}))`
  display: block;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 3rem 0 1.5rem;
  text-align: center;
  color: var(--light-grey);
`;

const Text = styled.p`
text-align: center;
  color: var(--dark-grey);
`;