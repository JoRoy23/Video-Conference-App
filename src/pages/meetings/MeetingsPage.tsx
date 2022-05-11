import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MainHeaderContext } from "../../contexts/providers/MainHeaderProvider";
import { meetingStatus } from "../../config/config";
import meetings, { IMeeting } from "../../data/meetings";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";


const MeetingsPage = () => {
  const [meetingStatusSelected, setMeetingStatusSelected] = useState(meetingStatus.UPCOMING);
  const [meetingSelected, setMeetingSelected] = useState<IMeeting | null>(null)
  const [recordedMeetings, serRecordedMeetings] = useState<IMeeting[] | null>(null)
  const [upcomingMeetings, setUpcomingMeetings] = useState<IMeeting[] | null>(null)
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    const { RECORDED, UPCOMING } = meetingStatus;
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

  const onResetClick = () => {
    const { UPCOMING } = meetingStatus;

    setMeetingStatusSelected(UPCOMING);
    setMeetingSelected(upcomingMeetings ? upcomingMeetings[0] : null);
  };

  const onTabClick = (status: string) => {
    setMeetingStatusSelected(status);
  };

  return (
    <StyledMeetings>
      <LeftPanel 
        meetingSelected={meetingSelected}
        meetingStatusSelected={meetingStatusSelected}
        onMeetingCardClick={onMeetingCardClick}
        onResetClick={onResetClick}
        onTabClick={onTabClick}
        recordedMeetings={recordedMeetings}
        upcomingMeetings={upcomingMeetings}
      />
      <RightPanel 
        meetingSelected={meetingSelected}
      />
    </StyledMeetings>
  );
};

export default MeetingsPage;

const StyledMeetings = styled.div`
  display: flex;
  height: 100%;
`;
