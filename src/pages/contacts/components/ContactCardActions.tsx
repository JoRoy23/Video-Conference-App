import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import DefaultButton from "../../../components/buttons/DefaultButton";
import LargeAccentButton from "../../../components/buttons/LargeAccentButton";
import LargeDefaultButton from "../../../components/buttons/LargeDefaultButton";
import MessageIcon from "../../../assets/icons/message.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";
import VideocallIcon from "../../../assets/icons/videocall.svg";

const ContactCardActions = () => {
  return (
    <StyledContactCardsActions>
      <LargeDefaultButton>
        <ReactSVG src={PhoneIcon}/>
        <span>Call</span>
      </LargeDefaultButton>
      <LargeAccentButton>
        <ReactSVG src={MessageIcon}/>
        <span>Message</span>    
      </LargeAccentButton>
      <LargeDefaultButton>
        <ReactSVG src={VideocallIcon}/>
        <span>Videocall</span>
      </LargeDefaultButton>
      <DefaultButton>
        <ReactSVG src={EditIcon}/>
      </DefaultButton>
      <DefaultButton>
        <ReactSVG src={DeleteIcon}/>
      </DefaultButton>
    </StyledContactCardsActions>
  );
};

export default ContactCardActions;

const StyledContactCardsActions = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 3rem 0;
  border-bottom: var(--grey-border);
`;