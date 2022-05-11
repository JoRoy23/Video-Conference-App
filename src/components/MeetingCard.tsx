import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { IMeeting } from "../data/meetings";
import ActiveMeetingCardButton from "./buttons/ActiveMeetingCardButton";
import ClockIcon from "../assets/icons/clock.svg";
import DefaultButton from "./buttons/DefaultButton";
import LargeAccentButton from "./buttons/LargeAccentButton";
import MoreIndicator from "./MoreIndicator";
import MoreOptionsButton from "./buttons/MoreOptionsButton";

interface IMeetingCard {
  meeting: IMeeting;
  readOnly?: boolean; 
  selected?: boolean;
  onMeetingCardClick?: (meeting: IMeeting) => void;
};

const MeetingCard = ({ meeting, readOnly, selected, onMeetingCardClick }: IMeetingCard) => {
  const nbOfAvatarsVisible = 3;

  const getCardTime = () => {
    const { endAt, startAt } = meeting;

    return `${startAt} - ${endAt} starts in 18 hours`;
  }
  
  const getNbOfParticipantsHidden = () => {
    const { participants } = meeting;

    return `+${participants.length - nbOfAvatarsVisible}`;
  }

  const handleMeetingCardClick = () => {
    if (onMeetingCardClick) {
      onMeetingCardClick(meeting);
    }
  };

  const renderParticipantsAvatar = () => {
    let { participants } = meeting;
    
    participants = participants.length > nbOfAvatarsVisible ? participants.slice(0, nbOfAvatarsVisible) : participants;

    return participants.map((participant) => (
      <Avatar 
        key={participant.id} 
        src={participant.avatar} 
        alt="avatar"
      />
    )) 
  };

  return (
    <StyledMeetingCard 
      clickable={typeof onMeetingCardClick !== "undefined"} 
      selected={selected} 
      onClick={handleMeetingCardClick}
    >
      <TopContainer>
        <CardInfo selected={selected}>
          <h2>{meeting.title}</h2>
          <TimeInfo selected={selected}>
            <ReactSVG src={ClockIcon}/>
            <p>{getCardTime()}</p>
          </TimeInfo>
        </CardInfo>
        {!readOnly && <MoreOptionsButton />}
      </TopContainer>
      <BottomContainer>
        <Participants>
          <Avatars>
            {renderParticipantsAvatar()}
          </Avatars>
          {meeting.participants.length > nbOfAvatarsVisible && (
            <MoreIndicator 
              border={selected ? "0.05rem solid #ffffff59" : "var(--grey-border)"}
              color={selected ? "var(--white)" : "var(--button-light-color)"}
            >
              {getNbOfParticipantsHidden()}
            </MoreIndicator>
          )}
        </Participants>
        <Buttons>
          {selected ? (
            <ActiveMeetingCardButton>id</ActiveMeetingCardButton>
          ) : (
            <DefaultButton>id</DefaultButton>
          )}
          {!readOnly && <LargeAccentButton>Start</LargeAccentButton>}
        </Buttons>
      </BottomContainer>
    </StyledMeetingCard>
  );
};

export default MeetingCard;

const StyledMeetingCard = styled.li<{ clickable: boolean, selected: boolean | undefined }>`
  padding: 3.5rem 3.5rem 3rem 3.5rem;
  margin: 0 auto;
  border-radius: 1.4rem;
  border: var(--dark-grey-border);
  background-color: ${props => props.selected ? "var(--blue-accent)" : "var(--medium-black)"};
  cursor: ${props => props.clickable ? "pointer" : "default"};
`;

const TopContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  column-gap: 2rem;
  margin-bottom: 3.8rem;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
`;

const CardInfo = styled.div<{ selected: boolean | undefined }>`
  > h2 {
    margin-bottom: 1.5rem;
    color: ${props => props.selected ? "var(--white)" : "var(--medium-grey)"};
  }
`;

const TimeInfo = styled.div<{ selected: boolean | undefined }>`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  > p {
    color: ${props => props.selected ? "var(--light-grey)" : "var(--dark-grey)"};
  }

  .injected-svg {
    position: relative;
    top: -0.06rem;
    display: block;
    width: 1.6rem;
    height: 1.6rem;

    path {
      fill: ${props => props.selected ? "var(--light-grey)" : "var(--dark-grey)"};
    }
  }
`;

const Participants = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const Avatars = styled.div`
  display: flex;
  column-gap: 1rem;

  .injected-svg {
    display: block;
  }
`;

const Avatar = styled.img.attrs(props => ({
  width:"48px",
  height: "48px"
}))``;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;