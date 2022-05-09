import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { IMeeting } from "../data/meetings";
import AccentButton from "./buttons/AccentButton";
import ActiveMeetingCardButton from "./buttons/ActiveMeetingCardButton";
import ClockIcon from "../assets/icons/clock.svg";
import DefaultButton from "./buttons/DefaultButton";
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

  const renderParticipantAvatar = () => {
    let { participants } = meeting;
    
    participants = participants.length > nbOfAvatarsVisible ? participants.slice(0, nbOfAvatarsVisible) : participants;

    return participants.map((participant) => (
      <Avatar key={participant.id} src={participant.avatar} alt="avatar"/>
    )) 
  };

  return (
    <StyledMeetingCard selected={selected} onClick={handleMeetingCardClick}>
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
            {renderParticipantAvatar()}
          </Avatars>
          {meeting.participants.length > nbOfAvatarsVisible && (
            <MoreIndicator>{getNbOfParticipantsHidden()}</MoreIndicator>
          )}
        </Participants>
        <Buttons>
          {selected ? <ActiveMeetingCardButton>id</ActiveMeetingCardButton> : <DefaultButton>id</DefaultButton>}
          {!readOnly && <ExtendedAccentButton>Start</ExtendedAccentButton>}
        </Buttons>
      </BottomContainer>
    </StyledMeetingCard>
  );
};

export default MeetingCard;

const StyledMeetingCard = styled.li<{ selected: boolean | undefined }>`
  padding: 3.5rem 3.5rem 3rem 3.5rem;
  margin: 0 auto;
  border-radius: 1.4rem;
  border: var(--dark-grey-border);
  background-color: ${props => props.selected ? "var(--blue-accent)" : "var(--medium-black)"};
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
    top: -0.01rem;
    display: block;
    width: 1.2rem;
    height: 1.2rem;
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

const ExtendedAccentButton = styled(AccentButton)`
  padding: 1.5rem 3rem;
`;