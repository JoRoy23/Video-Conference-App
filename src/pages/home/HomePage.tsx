import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { MainHeaderContext } from '../../contexts/providers/MainHeaderProvider';
import { meetingsStatus } from "../../config/config";
import meetings, { IMeeting } from "../../data/meetings";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const HomePage = () => {
  const [upcomingMeetings, setUpcomingMeetings] = useState< IMeeting[] | null>(null);
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  useEffect(() => {
    const { UPCOMING } = meetingsStatus;
    const todayMeetings = meetings?.filter(meeting => meeting.status === UPCOMING);

    setMainHeaderTitle("Home");
    setUpcomingMeetings(todayMeetings);
  }, [setMainHeaderTitle]);


  return (
    <StyledHomePage>
      <LeftPanel />
      <RightPanel upcomingMeetings={upcomingMeetings}/>
    </StyledHomePage>
  );
}

export default HomePage;

const StyledHomePage = styled.div`
  display: flex;
  height: 100%;
`;