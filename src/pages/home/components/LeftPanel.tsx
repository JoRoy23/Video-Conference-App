import React from "react";
import styled from "styled-components";
import AddIcon from "../../../assets/icons/add-filled.svg";
import BigCalendarIcon from "../../../assets/icons/calendar-big.svg";
import CameraIcon from "../../../assets/icons/camera.svg";
import ComputerIcon from "../../../assets/icons/computer.svg";
import HomeCard from "./HomeCard";

const LeftPanel = () => {
  const cards = [
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

  const renderCard = () => (
    cards.map(card => (
       <HomeCard key={card.id} card={card}/>
    ))
  );

  return (
    <StyledLeftPanel>
      <Cards>
        {renderCard()}
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

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(20rem, 23rem));
  gap: 3rem;
  justify-content: center;
`;