import React from "react";
import styled from "styled-components";
import { IMeeting } from "../../../data/meetings";
import { meetingStatus } from "../../../config/config";
import MeetingCard from "../../../components/MeetingCard";

interface IMeetingsList {
  meetingSelected: IMeeting | null;
  meetingStatusSelected: string;
  onMeetingCardClick: (meeting: IMeeting) => void;
  recordedMeetings: IMeeting[] | null;
  upcomingMeetings: IMeeting[] | null;
};

const MeetingsList = ({ 
  meetingSelected,
  meetingStatusSelected, 
  onMeetingCardClick,
  recordedMeetings, 
  upcomingMeetings, 
}: IMeetingsList) => {
  const renderMeetingCards = () => {
    const { RECORDED } = meetingStatus;
    let meetings = upcomingMeetings;

    if (meetingStatusSelected === RECORDED) {
      meetings = recordedMeetings;
    }

    return meetings?.map(meeting => (
      <MeetingCard 
        key={meeting.id} 
        meeting={meeting} 
        readOnly 
        selected={meetingSelected?.id === meeting.id}
        onMeetingCardClick={onMeetingCardClick}
      />
    ))
  };

  return (
    <StyledMeetingsList>
      <h2>{meetingStatusSelected === meetingStatus.UPCOMING ? "Today" : "Recorded"}</h2>
      <MeetingsCard>
        {renderMeetingCards()}
      </MeetingsCard>
    </StyledMeetingsList>
  );
};

export default MeetingsList;

const StyledMeetingsList = styled.div`
  flex-grow: 1;
  padding-bottom: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 1.2rem;
    height: 1.2rem;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 10rem;
    border: 0.3rem solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    background-clip: padding-box;
  }

  > h2 {
    margin: 3.1rem 3rem 2rem 3rem;
    color: var(--white);
  }
`;

const MeetingsCard = styled.ul`
  list-style-type: none;

  > li {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;