import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import { MainHeaderContext } from '../../contexts/providers/MainHeaderProvider';
import todayMeetings, { IMeeting } from "../../data/todayMeetings";
import AddIcon from "../../assets/icons/add.svg";
import BigCalendarIcon from "../../assets/icons/calendar-big.svg";
import CameraIcon from "../../assets/icons/camera.svg";
import ComputerIcon from "../../assets/icons/computer.svg";
import HomeCard from "./components/HomeCard";
import MeetingCard from "../../components/MeetingCard";
import TimeCard from "./components/TimeCard";

const HomePage = () => {
  const [meetings, setMeetings] = useState< IMeeting[] | null>(null);
  const {setMainHeaderTitle} = useContext(MainHeaderContext)!;

  const homeCards = [
    {
      id: 0,
      icon: CameraIcon,
      title: "New Meeting",
      description: "set up new meeting",
      path: "/",
      background: "var(--orange-accent)"
    },
    {
      id: 1,
      icon: AddIcon,
      title: "Join Meeting",
      description: "via invitation link",
      path: "/"
    },
    {
      id: 2,
      icon: BigCalendarIcon,
      title: "Schedule",
      description: "plan your meetings",
      path: "/schedule"
    },
    {
      id: 3,
      icon: ComputerIcon,
      title: "Share Screen",
      description: "show your work",
      path: "/"
    }
  ];

  useEffect(() => {
    setMainHeaderTitle("Home");
    setMeetings(todayMeetings);
  }, [setMainHeaderTitle]);

  const renderHomeCard = () => (
    homeCards.map(card => (
      <HomeCard key={card.id} card={card}/>
    ))
  );

  const renderMeetingCard = () => (
    meetings?.map(meeting => (
      <MeetingCard key={meeting.id} meeting={meeting}/>
    ))
  );

  return (
    <StyledHomePage>
      <LeftContainer>
        <HomeCards>
          {renderHomeCard()}
        </HomeCards>
      </LeftContainer>
      <RightContainer>
        <TimeCard />
        <TodayMeetingCards>
          {renderMeetingCard()}
        </TodayMeetingCards>
      </RightContainer>
    </StyledHomePage>
  );
}

export default HomePage;

const StyledHomePage = styled.div`
  display: flex;
  height: 100%;
`;

const LeftContainer = styled.div`
  flex: 1 0 50%;
  padding: 5rem;
  border-right: var(--grey-border); 
`;

const RightContainer = styled.div`
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

const HomeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 23rem));
  gap: 3rem;
  justify-content: center;
`;

const TodayMeetingCards = styled.ul`
  margin-top: 3rem;
  list-style-type: none;

  > li {
    margin-bottom: 1.2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;