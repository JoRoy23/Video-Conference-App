import React from "react";
import styled from "styled-components";
import ContactsOptions from "./ContactsOptions";

interface ILeftPanel {
  onTabClick: (tab: string) => void;
  tabSelected: string;
};

const LeftPanel = ({ onTabClick, tabSelected }: ILeftPanel) => {
  return (
    <StyledLeftPanel>
      <Content>
        <ContactsOptions 
          onTabClick={onTabClick} 
          tabSelected={tabSelected}
        />
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