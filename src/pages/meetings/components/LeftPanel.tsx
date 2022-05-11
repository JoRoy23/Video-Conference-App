import React from "react";
import styled from "styled-components";
import { IMeeting } from "../../../data/meetings";
import MeetingsList from "./MeetingsList";
import MeetingsOptions from "./MeetingsOptions";

interface ILeftPanel {
  meetingSelected: IMeeting | null;
  meetingStatusSelected: string;
  onMeetingCardClick: (meeting: IMeeting) => void;
  onResetClick: () => void;
  onTabClick: (status: string) => void;
  recordedMeetings: IMeeting[] | null;
  upcomingMeetings: IMeeting[] | null;
};

const LeftPanel = ({ 
  meetingSelected,
  meetingStatusSelected, 
  onMeetingCardClick,
  onResetClick,
  onTabClick,
  recordedMeetings,
  upcomingMeetings,
}: ILeftPanel) => {
  return (
    <StyledLeftPanel>
      <Content>
        <MeetingsOptions 
          meetingStatusSelected={meetingStatusSelected} 
          onResetClick={onResetClick}
          onTabClick={onTabClick}
          upcomingMeetings={upcomingMeetings}
        />
        <MeetingsList 
          meetingSelected={meetingSelected}
          meetingStatusSelected={meetingStatusSelected}
          onMeetingCardClick={onMeetingCardClick}
          recordedMeetings={recordedMeetings}
          upcomingMeetings={upcomingMeetings} 
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