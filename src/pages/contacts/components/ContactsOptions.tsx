import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { contactsTab, readableContactsTab } from "../../../config/config";
import AddIcon from "../../../assets/icons/add.svg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import Tabs from "../../../components/tabs/Tabs";
import Tab from "../../../components/tabs/components/Tab";

interface IContactsOptions {
  onTabClick: (tab: string) => void;
  tabSelected: string;
};

const ContactsOptions = ({ onTabClick, tabSelected }: IContactsOptions) => {
  const handleAddClick = () => {
    console.log("add button clicked");
  };

  const handleTabClick = (tab: string) => {
    onTabClick(tab);
  };

  const renderTab = () => (
    Object.keys(contactsTab).map(key => {
      const tab = contactsTab[key as keyof typeof contactsTab];

      return (
        <Tab 
          key={key} 
          active={tab === tabSelected} 
          onClick={() => {handleTabClick(tab)}}
        >
          {readableContactsTab[tab]}
        </Tab>
      );
    })
  );

  return (
    <StyledContactsOptions>
      <Tabs>
        {renderTab()}
      </Tabs>
      <DefaultButton borderHidden onClick={handleAddClick}>
        <ReactSVG src={AddIcon}/>
      </DefaultButton>
    </StyledContactsOptions>
  );
};

export default ContactsOptions;

const StyledContactsOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-right: 1.2rem;
  border-bottom: var(--grey-border);
`;