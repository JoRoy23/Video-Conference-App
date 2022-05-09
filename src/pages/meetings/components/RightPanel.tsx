import React from "react";
import styled from "styled-components";
import { IMeeting } from "../../../data/meetings";
import MeetingsActions from "./MeetingActions";
import MeetingId from "./MeetingId";
import MeetingsParticipants from "./MeetingParticipants";

interface IRightPanel {
  meetingSelected: IMeeting | null;
};

const RightPanel = ({ meetingSelected }: IRightPanel) => {
  return (
    <StyledRightPanel>
      <MeetingContent>
        <MeetingTitle>{meetingSelected?.title}</MeetingTitle>
        <MeetingsActions />
        <MeetingDescription>{meetingSelected?.description}</MeetingDescription>
        <MeetingId id={meetingSelected?.id}/>
        <MeetingsParticipants meetingSelected={meetingSelected}/>
      </MeetingContent>
    </StyledRightPanel>
  );
};

export default RightPanel;

const StyledRightPanel = styled.div`
  flex: 1 0 60%;
  padding: 8rem 6.8rem 7.8rem 8rem;
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
`;

const MeetingContent = styled.div`
  width: 100%;
  min-width: 55rem;
  max-width: 100rem;
  margin: 0 auto;
`;

const MeetingTitle = styled.h1`
  color: var(--light-grey);
`;

const MeetingDescription = styled.p`
  width: 55ch;
  margin: 2.5rem 0 6rem;
  color: var(--dark-grey);
`;