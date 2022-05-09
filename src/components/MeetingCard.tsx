import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { IMeeting } from "../data/todayMeetings";
import ClockIcon from "../assets/icons/clock.svg";
import MoreOptions from "./buttons/MoreOptions";
import StyledAccentButton from "./buttons/StyledAccentButton";
import StyledDefaultButton from "./buttons/StyledDefaultButton";
import StyledMoreIndicator from "./StyledMoreIndicator";

interface IMeetingCard {
  meeting: IMeeting;
};

const MeetingCard = ({ meeting }: IMeetingCard) => {
  const nbOfAvatarsVisible = 3;

  const getCardTime = () => {
    const { endAt, startAt } = meeting;

    return `${startAt} - ${endAt} starts in 18 hours`;
  }
  
  const getNbOfParticipantsHidden = () => {
    const { participants } = meeting;

    return `+${participants.length - nbOfAvatarsVisible}`;
  }

  const renderParticipantAvatar = () => {
    let { participants } = meeting;
    
    participants = participants.length > nbOfAvatarsVisible ? participants.slice(0, nbOfAvatarsVisible) : participants;

    return participants.map((participant) => (
      <Avatar key={participant.id} src={participant.avatar} alt="avatar"/>
    )) 
  };

  return (
    <StyledMeetingCard as="li">
      <TopContainer>
        <CardInfo>
          <h2>{meeting.title}</h2>
          <TimeInfo>
            <ReactSVG src={ClockIcon}/>
            <p>{getCardTime()}</p>
          </TimeInfo>
        </CardInfo>
        <MoreOptions />
      </TopContainer>
      <BottomContainer>
        <Participants>
          <Avatars>
            {renderParticipantAvatar()}
          </Avatars>
          {meeting.participants.length > nbOfAvatarsVisible && (
            <StyledMoreIndicator>{getNbOfParticipantsHidden()}</StyledMoreIndicator>
          )}
        </Participants>
        <Buttons>
          <StyledDefaultButton>id</StyledDefaultButton>
          <ExtendedAccentButton>Start</ExtendedAccentButton>
        </Buttons>
      </BottomContainer>
    </StyledMeetingCard>
  );
};

export default MeetingCard;

const StyledMeetingCard = styled.div`
  min-width: 55rem;
  max-width: 80rem;
  padding: 3.5rem 3.5rem 3rem 3.5rem;
  margin: 0 auto;
  border-radius: 1.4rem;
  border: var(--dark-grey-border);
  background-color: var(--medium-black);
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

const CardInfo = styled.div`
  > h2 {
    margin-bottom: 1.5rem;
    color: var(--medium-grey);
  }
`;

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  > p {
    color: var(--dark-grey);
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

const ExtendedAccentButton = styled(StyledAccentButton)`
  padding: 1.5rem 3rem;
`;