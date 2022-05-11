import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { IMeeting } from "../../../data/meetings";
import { meetingStatus, readableMeetingStatus } from "../../../config/config";
import AddIcon from "../../../assets/icons/add.svg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import RefreshIcon from "../../../assets/icons/refresh.svg";
import Tabs from "../../../components/tabs/Tabs";
import Tab from "../../../components/tabs/components/Tab";

interface IMeetingsOptions {
  meetingStatusSelected: string;
  onResetClick: () => void;
  onTabClick: (status: string) => void;
  upcomingMeetings: IMeeting[] | null;
};

const MeetingsOptions = ({ 
  meetingStatusSelected,
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

  const renderTabs = () => (
    Object.keys(meetingStatus).map(key => {
      const status = meetingStatus[key as keyof typeof meetingStatus];

      return (
        <Tab 
          key={key} 
          active={status === meetingStatusSelected} 
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
        {renderTabs()}
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