import React from "react";
import styled from "styled-components";
import AddImg from "../../../assets/images/add.svg";
import CalendarImg from "../../../assets/images/calendar.svg";
import CameraImg from "../../../assets/images/camera.svg";
import ComputerImg from "../../../assets/images/computer.svg";
import HomeCard from "./HomeCard";

const LeftPanel = () => {
  const cards = [
    {
      id: 0,
      image: CameraImg,
      title: "New Meeting",
      description: "set up new meeting",
      path: "/",
      background: "var(--orange-accent)"
    },
    {
      id: 1,
      image: AddImg,
      title: "Join Meeting",
      description: "via invitation link",
      path: "/"
    },
    {
      id: 2,
      image: CalendarImg,
      title: "Schedule",
      description: "plan your meetings",
      path: "/schedule"
    },
    {
      id: 3,
      image: ComputerImg,
      title: "Share Screen",
      description: "show your work",
      path: "/"
    }
  ];

  const renderCards = () => (
    cards.map(card => (
       <HomeCard key={card.id} card={card}/>
    ))
  );

  return (
    <StyledLeftPanel>
      <Cards>
        {renderCards()}
      </Cards>
    </StyledLeftPanel>
  );
};

export default LeftPanel;

const StyledLeftPanel = styled.div`
  flex: 1 0 50%;
  padding: 5rem;
  border-right: var(--grey-border); 
`;

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 23rem));
  gap: 3rem;
  justify-content: center;
`;