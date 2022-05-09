import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

interface IHomeCard {
    card: {
        id: number;
        icon: string;
        title: string;
        description: string;
        path: string;
        background?: string;
    }
};

const HomeCard = ({ card }: IHomeCard) => {
  const navigate = useNavigate();

  const handleHomeCardClick = () => {
    navigate(card.path);
  };

  return (
    <StyledHomeCard background={card.background} onClick={handleHomeCardClick}>
        <CardIcon>
            <ReactSVG src={card.icon}/>
        </CardIcon>
        <CardInfo>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
        </CardInfo>
    </StyledHomeCard>
  );
};

export default HomeCard;

const StyledHomeCard = styled.div<{background: string | undefined}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    row-gap: 1rem;
    aspect-ratio: 1 / 1;
    padding: 2.5rem;
    border-radius: 1.4rem;
    background-color: ${(props) => props.background || "var(--blue-accent)"};
    cursor: pointer;
`;

const CardIcon = styled.div`
    padding: 1.5rem;
    border-radius: 1.2rem;
    border: 0.05rem solid #ffffff59;
    background-color: #ffffff26;

    .injected-svg {
        display: block;
        width: 4rem;
        height: 4rem;
    }
`;

const CardInfo = styled.div``;

const CardTitle = styled.h3`
    margin-bottom: 0.6rem;
    color: var(--white);

    @media screen and (min-width: 1250px) {
        font-size: 1.7rem;
    }
`;

const CardDescription = styled.p`
    color: var(--light-grey);

    @media screen and (min-width: 1250px) {
        font-size: 1.5rem;
    }
`;