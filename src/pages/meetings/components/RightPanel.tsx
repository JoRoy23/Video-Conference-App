import React from "react";
import styled from "styled-components";
import { IMeeting } from "../../../data/meetings";
import MeetingsActions from "./MeetingActions";

interface IRightPanel {
  meetingSelected: IMeeting | null;
};

const RightPanel = ({ meetingSelected }: IRightPanel) => {
  return (
    <StyledRightPanel>
       <MeetingTitle>{meetingSelected?.title}</MeetingTitle>
       <MeetingsActions />
       <MeetingDescription>{meetingSelected?.description}</MeetingDescription>
    </StyledRightPanel>
  );
};

export default RightPanel;

const StyledRightPanel = styled.div`
  flex: 1 0 60%;
  padding: 8rem 6.8rem 7.8rem 8rem;
`;

const MeetingTitle = styled.h1`
  color: var(--light-grey);
`;

const MeetingDescription = styled.p`
  width: 55ch;
  margin: 2.5rem 0 6rem;
  color: var(--dark-grey);
`;