import React from "react";
import styled from "styled-components";
import { contactTab } from "../../../config/config";
import { IContact } from "../../../data/contacts";
import ContactsOptions from "./ContactsOptions";
import PersonalContacts from "./PersonalContacts";
interface ILeftPanel {
  contacts: IContact[] | null;
  contactSelected: IContact | null;
  onContactClick: (contact: IContact) => void;
  onTabClick: (tab: string) => void;
  tabSelected: string;
};

const LeftPanel = ({ 
  contacts,
  contactSelected, 
  onContactClick,
  onTabClick, 
  tabSelected, 
}: ILeftPanel) => {
  return (
    <StyledLeftPanel>
      <Content>
        <ContactsOptions 
          onTabClick={onTabClick} 
          tabSelected={tabSelected}
        />
        {tabSelected === contactTab.CONTACTS && (
          <PersonalContacts
            contacts={contacts}
            contactSelected={contactSelected}
            onContactClick={onContactClick}
          />
        )}
      </Content>
    </StyledLeftPanel>
  );
};

export default LeftPanel;

const StyledLeftPanel = styled.div`
  flex: 1 0 40%;
  height: 100%;
  padding: 2rem 0.8rem 0 2rem;
  border-right: var(--grey-border); 
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 55rem;
  max-width: 100rem;
  height: 100%;
  margin: 0 auto;
`;