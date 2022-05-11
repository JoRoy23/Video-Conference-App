import React from "react";
import styled from "styled-components";
import { contactType, readableContactType } from "../../../config/config";
import { IContact } from "../../../data/contacts";
import ContactsDropdown from "./ContactsDropdown";

interface IPersonalContacts {
  contacts: IContact[] | null;
  contactSelected: IContact | null;
  onContactClick: (contact: IContact) => void;
};

const PersonalContacts = ({
  contacts,
  contactSelected, 
  onContactClick,
}: IPersonalContacts) => {
  const getContactsByType = (type: string) => (
    contacts?.filter(contact => contact.type === type)
  );

  const renderContactsDropdowns = () => (
    Object.keys(contactType).map(key => {
      const type = contactType[key as keyof typeof contactType];

      return (
        <ContactsDropdown 
        contacts={getContactsByType(type)} 
        contactSelected={contactSelected}
        label={readableContactType[type]} 
        onContactClick={onContactClick}
      />
      );
    })
  );

  return (
    <StyledPersonalContacts>
      <h2>My Contacts</h2>
      {renderContactsDropdowns()}
    </StyledPersonalContacts>
  );
};

export default PersonalContacts;

const StyledPersonalContacts = styled.div`
  padding-bottom: 2rem;
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

  > h2 {
    margin: 3.1rem 3rem 2rem 2rem;
    color: var(--white);
  }
`;