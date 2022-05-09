import React from "react";
import AddImg from "../assets/images/add.svg";
import styled from "styled-components";

const InviteMemberCard = () => {
  const handleInviteCardClick = () => {
    console.log("invite card cicked");
  };

  return (
    <StyledInviteMemberCard onClick={handleInviteCardClick}>
      <ImageContainer>
        <CardImage src={AddImg} alt="Invite member image"/>
      </ImageContainer>
      <CardTitle>Invite Member</CardTitle>
    </StyledInviteMemberCard>
  );
};

export default InviteMemberCard;

const StyledInviteMemberCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 11.7rem;
  padding: 2rem;
  border-radius: 1.2rem;
  border: var(--dark-grey-border);
  background-color: var(--blue-accent);
  cursor: pointer;
`;

const ImageContainer = styled.div`
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  border-radius: 1.2rem;
  border: 0.05rem solid #ffffff59;
  background-color: #ffffff26;
`;

const CardImage = styled.img.attrs(props => ({
  width: "22px",
  height: "22px",
}))`
  display: block;
`;

const CardTitle = styled.h6`
  color: var(--white);
`;