import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import LargeAccentButton from "../../../components/buttons/LargeAccentButton";
import LargeDefaultButton from "../../../components/buttons/LargeDefaultButton";

const MeetingActions = () => {
  return (
    <StyledMeetingActions>
      <LargeAccentButton>Start</LargeAccentButton>
      <LargeDefaultButton>Copy invitation</LargeDefaultButton>
      <LargeDefaultButton>Join from Room</LargeDefaultButton>
      <DefaultButton>
        <ReactSVG src={EditIcon}/>
      </DefaultButton>
      <DefaultButton>
        <ReactSVG src={DeleteIcon}/>
      </DefaultButton>
    </StyledMeetingActions>
  );
};

export default MeetingActions;

const StyledMeetingActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 3rem 0;
  border-bottom: var(--grey-border);
`;