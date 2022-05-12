import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { IContact } from "../../../data/contacts";
import IconIndicator from "../../../components/IconIndicator";
import ClockIcon from "../../../assets/icons/clock.svg";
import HomeIcon from "../../../assets/icons/home.svg";
import LocationIcon from "../../../assets/icons/location.svg";
import WorkIcon from "../../../assets/icons/work.svg";

interface IContactCardInfo {
  contactSelected: IContact;
};

const ContactCardInfo = ({ contactSelected }: IContactCardInfo) => {
  const infoItems = [
    {
      id: 0,
      avatar: HomeIcon,
      label: "Home",
      key: "homePhone", 
    },
    {
      id: 1,
      avatar: WorkIcon,
      label: "Work",
      key: "workPhone",
    },
    {
      id: 2,
      avatar: LocationIcon,
      label: "Location",
      key: "location",
    },
    {
      id: 3,
      avatar: ClockIcon,
      label: "Time Zone",
      key: "timeZone",
    }
  ];

  const renderInfoItems = () => (
    infoItems.map(item => (
      <InfoItem key={item.id}>
        <IconIndicator>
          <ReactSVG src={item.avatar} />
        </IconIndicator>
        <div>
          <ItemLabel>{item.label}</ItemLabel>
          <ItemValue>{contactSelected[item.key as keyof typeof contactSelected]}</ItemValue>
        </div>
      </InfoItem>
    ))
  );


  return (
    <StyledContactCardInfo>
      <Title>Contact's Info</Title>
      <InfoItems>
        {renderInfoItems()}
      </InfoItems>
    </StyledContactCardInfo>
  );
};

export default ContactCardInfo;

const StyledContactCardInfo = styled.div`
  margin-top: 6rem;
`;

const Title = styled.h2`
  padding-bottom: 3rem;
  color: var(--light-grey);
  border-bottom: var(--grey-border);
`;

const InfoItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  row-gap: 6rem;
  column-gap: 11.5rem;
  padding: 3rem 0 3rem;
  border-bottom: var(--grey-border);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`;

const ItemLabel = styled.h6`
  margin-bottom: 0.8rem;
  color: var(--dark-grey);
`;

const ItemValue = styled.span`
  font-size: 1.4rem;
  color: var(--medium-grey);
`;