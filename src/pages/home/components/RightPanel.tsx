import React from "react";
import styled from "styled-components";
import { IMeeting } from "../../../data/meetings";
import MeetingCard from "../../../components/MeetingCard";
import TimeCard from "./TimeCard";

interface IRighPanel {
  upcomingMeetings: IMeeting[] | null;
};

const RightPanel = ({ upcomingMeetings }: IRighPanel) => {
  const renderMeetingCard = () => (
    upcomingMeetings?.map(meeting => (
      <MeetingCard key={meeting.id} meeting={meeting}/>
    ))
  );
 

  return (
    <StyledRightPanel>
      <TimeCard />
      <UpcomingMeetingsCard>
        {renderMeetingCard()}
      </UpcomingMeetingsCard>
    </StyledRightPanel>
  );
};

export default RightPanel;

const StyledRightPanel = styled.div`
  flex: 1 0 50%;
  padding: 5rem 3.8rem 5rem 5rem;
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

const UpcomingMeetingsCard = styled.ul`
  min-width: 55rem;
  max-width: 80rem;
  margin: 3rem auto 0;
  list-style-type: none;

  > li {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;