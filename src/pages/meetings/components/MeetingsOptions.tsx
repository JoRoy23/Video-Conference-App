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
  upcomingMeetings: IMeeting[] | null;
  updateMeetingSelected: (meeting: IMeeting | null) => void;
  updateMeetingsStatusSelected: (status: string) => void;
};

const MeetingsOptions = ({ 
  meetingsStatusSelected, 
  upcomingMeetings,
  updateMeetingSelected,  
  updateMeetingsStatusSelected, 
}: IMeetingsOptions) => {
  const handleAddClick = () => {
    console.log("add meeting clicked")
  };

  const handleResetClick = () => {
    const { UPCOMING } = meetingsStatus;

    updateMeetingSelected(upcomingMeetings ? upcomingMeetings[0] : null);
    updateMeetingsStatusSelected(UPCOMING);
  };

  const handleTabClick = (status: string) => {
    updateMeetingsStatusSelected(status);
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
  width: 100%;
  min-width: 55rem;
  max-width: 100rem;
  padding-bottom: 2rem;
  margin-right: 1.2rem;
  border-bottom: var(--grey-border);
`;