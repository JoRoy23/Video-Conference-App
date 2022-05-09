import React from "react";
import styled from "styled-components";
import DefaultButton from "../../../components/buttons/DefaultButton";

interface IMeetingId {
  id: string | undefined;
};

const MeetingId = ({ id }: IMeetingId) => {
  return (
    <StyledMeetingId>
      <DefaultButton>id</DefaultButton>
      <Info>
        <Title>Meeting id:</Title>
        <Id>{id}</Id>
      </Info>
    </StyledMeetingId>
  );
};

export default MeetingId;

const StyledMeetingId = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  padding: 2.5rem 0 3rem;
  border-top: var(--grey-border);
  border-bottom: var(--grey-border);
`;

const Info = styled.div`
  flex-grow: 1;
  position: relative;
  left: -4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h5`
  margin-bottom: 2rem;  
  color: var(--dark-grey);
`;

const Id = styled.h1`
  color: var(--light-grey);
`;