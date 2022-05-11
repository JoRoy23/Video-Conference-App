import React from "react";
import styled from 'styled-components';
import { ReactSVG } from "react-svg";
import { IMeeting } from "../../../data/meetings";
import InviteMemberCard from "../../../components/InviteMemberCard";
import ParticipantCard from "../../../components/ParticipantCard";
import ParticipantIcon from "../../../assets/icons/participant.svg";

interface IMeetingParticipants {
  meetingSelected: IMeeting | null;
};

const MeetingParticipants = ({ meetingSelected }: IMeetingParticipants) => {
  const renderCards = () => {
    const cards = [];

    meetingSelected?.participants.forEach(participant => {
      cards.push(<ParticipantCard key={participant.id} participant={participant}/>);
    });

    cards.push(<InviteMemberCard key="invite-member"/>);
    return cards;
  }

  return (
    <StyledMeetingParticipants>
      <TitleContainer>
        <ReactSVG src={ParticipantIcon} />
        <Title>Participant:</Title>
      </TitleContainer>
      <Cards>
        {renderCards()}
      </Cards>
    </StyledMeetingParticipants>
  );
};

export default MeetingParticipants;

const StyledMeetingParticipants = styled.div`
  margin-top: 3.1rem;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-bottom: 2.4rem;

  .injected-svg {
    display: block;
  }
`;

const Cards = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Title = styled.h5`
  color: var(--dark-grey);
`;