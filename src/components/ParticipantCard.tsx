import React from "react";
import styled from "styled-components";
import { getFullName } from "../config/config";
import { IParticipant } from "../data/meetings";

interface IParticipantCard {
  participant: IParticipant;
};

const ParticipantCard = ({ participant }: IParticipantCard) => {
  return (
    <StyledParticipant>
      <Avatar src={participant.avatar} alt="avatar"/>
      <Fullname>{getFullName(participant)}</Fullname>
    </StyledParticipant>
  );
};

export default ParticipantCard;

const StyledParticipant = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 11.7rem;
  padding: 2rem;
  border-radius: 1.2rem;
  border: var(--dark-grey-border);
  background-color: var(--medium-black);
`;

const Fullname = styled.h6`
  text-align: center;
  color: var(--dark-grey);
`;

const Avatar = styled.img.attrs(props => ({
  width: "48px",
  height: "48px",
}))`
  margin-bottom: 1.5rem;
`;