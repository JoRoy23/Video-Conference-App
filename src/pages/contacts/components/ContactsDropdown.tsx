import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { getFullName } from "../../../config/config";
import { IContact } from "../../../data/contacts";
import CaretIcon from "../../../assets/icons/caret.svg";
import NumberIndicator from "../../../components/NumberIndicator";

interface IContactsDropdown {
  contacts: IContact[] | undefined;
  contactSelected: IContact | null;
  label: string;
  onContactClick: (contact: IContact) => void;
};

const ContactsDropdown = ({ 
  contacts, 
  contactSelected,
  label, 
  onContactClick 
}: IContactsDropdown) => {
  const [dropdownListVisible, setDropdownListVisible] = useState(false);

  useEffect(() => {
    const contactSelectedInsideDropdown = contacts?.findIndex(contact => contact.id === contactSelected?.id) !== -1;

    if (contactSelected && contactSelectedInsideDropdown) {
      setDropdownListVisible(true);
    }
  }, [contacts, contactSelected]);

  const handleDropdownListVisiblity = () => {
    setDropdownListVisible(currentValue => !currentValue);
  };

  const renderListItems = () => (
    contacts?.map(contact => (
      <ListItem 
        key={contact.id} 
        active={contactSelected?.id === contact.id} 
        onClick={() => {onContactClick(contact)}}
      >
        <Avatar src={contact.avatar} alt="Contact avatar"/>
        <FullName active={contactSelected?.id === contact.id}>
          {getFullName(contact)}
        </FullName>
      </ListItem>
    ))
  );

  return (
    <StyledContactsDropdown>
      <DropdownHeader 
        dropdownListVisible={dropdownListVisible} 
        onClick={handleDropdownListVisiblity}
      >
        <LeftContainer dropdownListVisible={dropdownListVisible}>
          <ReactSVG src={CaretIcon}/>
          <h5>{label}</h5>
        </LeftContainer>
        <NumberIndicator>
          {contacts?.length}
        </NumberIndicator>
      </DropdownHeader>
      {dropdownListVisible && (
        <DropdownList>
          {renderListItems()}
        </DropdownList>
      )}
    </StyledContactsDropdown>
  );
};

export default ContactsDropdown;

const StyledContactsDropdown = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DropdownHeader = styled.div<{ dropdownListVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
  padding: 0.4rem 0.4rem 0.4rem 2.1rem;
  border-radius: 1.2rem;
  background-color: ${props => props.dropdownListVisible ? "var(--light-black)" : "transparent"};
  cursor: pointer;
`;

const LeftContainer = styled.div<{ dropdownListVisible: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 1.75rem;

  > h5 {
    color: ${props => props.dropdownListVisible ? "var(--medium-grey)" : "var(--dark-grey)"};
  }

  .injected-svg {
    display: block;
    transform: ${props => props.dropdownListVisible ? "rotate(90deg)" : "rotate(0)"};
  }
`;

const DropdownList = styled.ul`
  margin-top: 1.5rem;
  list-style-type: none;
`;

const ListItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  margin-left: 3.4rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 1.4rem;
  background-color: ${props => props.active ? "var(--blue-accent)" : "transparent"};
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img.attrs(props => ({
  width: "40px",
  height: "40px",
}))`
  display: block;
`;

const FullName = styled.h6<{ active: boolean }>`
  color: ${props => props.active ? "var(--white)" : "var(--dark-grey)"};
`;