import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { IMeeting } from "../../../data/meetings";
import { meetingsStatus, readableMeetingStatus } from "../../../config/config";
import AddIcon from "../../../assets/icons/add.svg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import RefreshIcon from "../../../assets/icons/refresh.svg";
import Tabs from "../../../components/tabs/Tabs";
import Tab from "../../../components/tabs/components/Tab";

interface IMeetingsOptions {
  meetingsStatusSelected: string;
  onResetClick: () => void;
  onTabClick: (status: string) => void;
  upcomingMeetings: IMeeting[] | null;
};

const MeetingsOptions = ({ 
  meetingsStatusSelected,
  onResetClick,
  onTabClick, 
}: IMeetingsOptions) => {
  const handleAddClick = () => {
    console.log("add meeting clicked")
  };

  const handleResetClick = () => {
    onResetClick();
  };

  const handleTabClick = (status: string) => {
    onTabClick(status);
  };

  const renderTab = () => (
    Object.keys(meetingsStatus).map(key => {
      const status = meetingsStatus[key as keyof typeof meetingsStatus];

      return (
        <Tab 
          key={key} 
          active={status === meetingsStatusSelected} 
          onClick={() => {handleTabClick(status)}}
        >
          {readableMeetingStatus[status]}
        </Tab>
      );
    })
  );

  return (
    <StyledMeetingsOptions>
      <DefaultButton borderHidden onClick={handleResetClick}>
        <ReactSVG src={RefreshIcon}/>
      </DefaultButton>
      <Tabs>
        {renderTab()}
      </Tabs>
      <DefaultButton borderHidden onClick={handleAddClick}>
        <ReactSVG src={AddIcon}/>
      </DefaultButton>
    </StyledMeetingsOptions>
  );
};

export default MeetingsOptions;

const StyledMeetingsOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  margin-right: 1.2rem;
  border-bottom: var(--grey-border);
`;