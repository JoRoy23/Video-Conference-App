import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { MainHeaderContext } from '../../contexts/providers/MainHeaderProvider';
import personalContacts, { IContact } from "../../data/contacts";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const ContactsPage = () => {
  const [contacts, setContacts] = useState<IContact[] | null>(null);
  const [contactSelected, setContactSelected] = useState<IContact | null>(null)
  const [tabSelected, setTabSelected] = useState("contacts");
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    setMainHeaderTitle("Contacts");
    setContacts(personalContacts);
  }, [setMainHeaderTitle]);

  const onContactClick = (contact: IContact) => {
    setContactSelected(contact);
  };

  const onTabClick = (tab: string) => {
    setTabSelected(tab);
  };

  return (
    <StyledContacts>
      <LeftPanel 
        contacts={contacts}
        contactSelected={contactSelected}
        onContactClick={onContactClick}
        onTabClick={onTabClick} 
        tabSelected={tabSelected}
      />
      <RightPanel contactSelected={contactSelected}/>
    </StyledContacts>
  );
};

export default ContactsPage;

const StyledContacts = styled.div`
  display: flex;
  height: 100%;
`;