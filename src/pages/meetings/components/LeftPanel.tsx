import React from "react";
import styled from "styled-components";
import { IMeeting } from "../../../data/meetings";
import MeetingsList from "./MeetingsList";
import MeetingsOptions from "./MeetingsOptions";

interface ILeftPanel {
  meetingSelected: IMeeting | null;
  meetingsStatusSelected: string;
  onMeetingCardClick: (meeting: IMeeting) => void;
  recordedMeetings: IMeeting[] | null;
  upcomingMeetings: IMeeting[] | null;
  updateMeetingSelected: (meeting: IMeeting | null) => void;
  updateMeetingsStatusSelected: (status: string) => void;
};

const LeftPanel = ({ 
  meetingSelected,
  meetingsStatusSelected, 
  onMeetingCardClick,
  recordedMeetings,
  upcomingMeetings,
  updateMeetingSelected, 
  updateMeetingsStatusSelected,
}: ILeftPanel) => {
  return (
    <StyledLeftPanel>
      <MeetingsOptions 
        meetingsStatusSelected={meetingsStatusSelected} 
        upcomingMeetings={upcomingMeetings}
        updateMeetingSelected={updateMeetingSelected}
        updateMeetingsStatusSelected={updateMeetingsStatusSelected}
      />
      <MeetingsList 
        meetingSelected={meetingSelected}
        meetingsStatusSelected={meetingsStatusSelected}
        onMeetingCardClick={onMeetingCardClick}
        recordedMeetings={recordedMeetings}
        upcomingMeetings={upcomingMeetings} 
      />
    </StyledLeftPanel>
  );
};

export default LeftPanel;

const StyledLeftPanel = styled.div`
  flex: 1 0 40%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0.8rem 0 2rem;
  border-right: var(--grey-border); 
`;