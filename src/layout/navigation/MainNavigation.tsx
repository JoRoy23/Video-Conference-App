import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import CalendarIcon from "../../assets/icons/calendar.svg";
import CalendarFilledIcon from "../../assets/icons/calendar-filled.svg";
import ChatIcon from "../../assets/icons/chat.svg";
import ChatFilledIcon from "../../assets/icons/chat-filled.svg";
import ClockIcon from "../../assets/icons/clock.svg";
import ClockFilledIcon from "../../assets/icons/clock-filled.svg";
import ContactsIcon from "../../assets/icons/contacts.svg";
import ContactsFilledIcon from "../../assets/icons/contacts-filled.svg";
import HomeIcon from "../../assets/icons/home.svg";
import HomeFilledIcon from "../../assets/icons/home-filled.svg";
import LogoIcon from "../../assets/icons/logo.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

const MainNavigation = () => {
  const navigationItems = [
    {
      id: 0,
      icon: HomeIcon,
      iconActive: HomeFilledIcon,
      label: "Home",
      path: "/"
    },
    {
      id: 1,
      icon: ChatIcon,
      iconActive: ChatFilledIcon,
      label: "Chat",
      path: "/chat"
    },
    {
      id: 2,
      icon: ClockIcon,
      iconActive: ClockFilledIcon,
      label: "Meetings",
      path: "/meetings"
    },
    {
      id: 3,
      icon: ContactsIcon,
      iconActive: ContactsFilledIcon,
      label: "Contacts",
      path: "/contacts"
    },
    {
      id: 4,
      icon: CalendarIcon,
      iconActive: CalendarFilledIcon,
      label: "Schedule",
      path: "/schedule"
    },
  ];

  const renderNavigationItems = () => (
    navigationItems.map(item => (
      <NavigationItem key={item.id}>
        <NavLink className={({ isActive }) => isActive ? "navigation-item navigation-item--active" : "navigation-item"} to={item.path}>
          <ReactSVG className="navigation-icon--inactive" src={item.icon}/>
          <ReactSVG className="navigation-icon--active" src={item.iconActive}/>
          <Label>{item.label}</Label>
        </NavLink>
      </NavigationItem>
    ))
  );

  return (
    <StyledMainNavigation>
      <Logo to="/">
        <ReactSVG src={LogoIcon}/>
      </Logo>
      <NavigationItems>
        {renderNavigationItems()}
      </NavigationItems>
      <NavLink className={({ isActive }) => isActive ? "navigation-item navigation-item--settings navigation-item--active" : "navigation-item navigation-item--settings"} to="/settings">
        <ReactSVG src={SettingsIcon}/>
        <Label>Settings</Label>
      </NavLink>
    </StyledMainNavigation>
  );
};

export default MainNavigation;

const StyledMainNavigation = styled.nav`
  grid-area: mainNavigation;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 7.4rem;
  padding: 2.3rem 2.5rem 3.1rem;
  border-right: var(--grey-border); 
  background-color: var(--dark-black);

  .navigation-item:hover::after,
  .navigation-item--active::after {
    position: absolute;
    content: "";
    inset: auto 1.2rem 0 1.2rem;
    height: 0.2rem;
    background-color: var(--dark-grey);
  }

  .navigation-item {
    position: relative;
    display: inline-block;
    padding: 1.4rem;
    border-radius: 1.2rem;
    border: 0.5px solid transparent;
    background-color: transparent;

    &:hover {
      border: var(--grey-border);
      background-color: #242736;

      > span {
        display: block;
      }
    }

    > .navigation-icon--active {
        display: none;
    }

    > .navigation-icon--inactive {
        display: block;
    }

    .injected-svg {
      display: block;
      width: 2.1rem;
      height: 2.1rem;
    }
  }

  .navigation-item--settings {
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background-color: var(--medium-black);
  }

  .navigation-item--active {
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    background-color: var(--medium-black);

    > .navigation-icon--active {
      display: block;
    }

    > .navigation-icon--inactive {
      display: none;
    }
  }
`;

const Logo = styled(NavLink)`
  .injected-svg {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

const NavigationItems = styled.ul`
  flex-grow: 1;
  list-style-type: none;
`;

const NavigationItem = styled.li`
  position: relative;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  display: none;
  position: absolute;
  inset: 50% auto auto 8.5rem;
  transform: translateY(-50%);
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  border: var(--grey-border);
  background-color: var(--medium-black);
  color: var(--white);
`;