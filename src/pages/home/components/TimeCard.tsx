import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { dateFormat } from "../../../config/config";
import FlowersImage from "../../../assets/images/flowers.svg";
import TimeCardBackground from "../../../assets/images/time-card-background.png";

const TimeCard = () => {
    const [date, setDate] = useState(moment());

    const interval = 60 // seconds;

    const getFormatedDate = (format: string) => date.format(format);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setDate(moment());
        }, interval * 1000);

        return () => {
            clearInterval(timeInterval);
        };
    }, [setDate]);

  return (
    <StyledTimeCard>
        <img src={TimeCardBackground} alt="gradient background"/>
        <img src={FlowersImage} alt="flowers"/>
        <TimeInfo>
            <ActualTime>{getFormatedDate(dateFormat.SHORT_TIME)}</ActualTime>
            <ActualDate>{getFormatedDate(dateFormat.LONG_DATE)}</ActualDate>
        </TimeInfo>
    </StyledTimeCard>
  );
};

export default TimeCard;

const StyledTimeCard = styled.div`
    position: relative;
    min-width: 55rem;
    max-width: 80rem;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 1.4rem;
    
    > img {
        display: block;

        &:first-of-type {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
        }

        &:last-of-type {
            position: absolute;
            inset: auto -0.5rem 0 auto;
            height: 105%;
        }
    }
`;

const TimeInfo = styled.div`
    position: absolute;
    inset: auto auto 3.5rem 3.5rem;
    display: flex;
    flex-direction: column;
`;

const ActualTime = styled.span`
    font-size: 6rem;
    color: var(--white);
`;

const ActualDate = styled.span`
    font-size: 1.6rem;
    color: var(--light-grey);
`;