import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";
import { meetingsStatus } from "../../config/config";
import meetings, { IMeeting } from "../../data/meetings";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";


const MeetingsPage = () => {
  const [meetingsStatusSelected, setMeetingsStatusSelected] = useState(meetingsStatus.UPCOMING);
  const [meetingSelected, setMeetingSelected] = useState<IMeeting | null>(null)
  const [recordedMeetings, serRecordedMeetings] = useState<IMeeting[] | null>(null)
  const [upcomingMeetings, setUpcomingMeetings] = useState<IMeeting[] | null>(null)
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    const { RECORDED, UPCOMING } = meetingsStatus;
    const meetingsRecorded = meetings.filter(meeting => meeting.status === RECORDED);
    const meetingsUpcoming = meetings.filter(meeting => meeting.status === UPCOMING);

    setMainHeaderTitle("Meetings");
    serRecordedMeetings(meetingsRecorded);
    setUpcomingMeetings(meetingsUpcoming);
    setMeetingSelected(meetingsUpcoming[0]);
  }, [setMainHeaderTitle]);

  const onMeetingCardClick = (meeting: IMeeting) => {
    setMeetingSelected(meeting);
  };

  const updateMeetingSelected = (meeting: IMeeting | null) => {
    setMeetingSelected(meeting);
  };

  const updateMeetingsStatusSelected = (status: string) => {
    setMeetingsStatusSelected(status);
  };

  return (
    <StyledMeetings>
      <LeftPanel 
        meetingSelected={meetingSelected}
        meetingsStatusSelected={meetingsStatusSelected}
        onMeetingCardClick={onMeetingCardClick}
        recordedMeetings={recordedMeetings}
        upcomingMeetings={upcomingMeetings}
        updateMeetingSelected={updateMeetingSelected} 
        updateMeetingsStatusSelected={updateMeetingsStatusSelected}
      />
      <RightPanel 
        meetingSelected={meetingSelected}
      />
      {/* <RightContainer>
        <MeetingIdContainer>
          <DefaultButton>id</DefaultButton>
          <MeetingId>{meetingSelected?.id}</MeetingId>
        </MeetingIdContainer>
        <Participants>

        </Participants>
      </RightContainer> */}
    </StyledMeetings>
  );
};

export default MeetingsPage;

const StyledMeetings = styled.div`
  display: flex;
  height: 100%;
`;

const MeetingIdContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 0 3rem;
  border-top: var(--grey-border);
  border-bottom: var(--grey-border);
`;

const MeetingId = styled.h1`
  flex-grow: 1;
  color: var(--light-grey);
`;

const Participants = styled.div`
  padding-top: 3.1rem;
`;