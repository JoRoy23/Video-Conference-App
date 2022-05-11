import { contactType } from "../config/config";
import Avatar1 from "../assets/images/avatar-1.svg";
import Avatar2 from "../assets/images/avatar-2.svg";
import Avatar3 from "../assets/images/avatar-3.svg";
import Avatar4 from "../assets/images/avatar-4.svg";
import Avatar5 from "../assets/images/avatar-5.svg";
import Avatar6 from "../assets/images/avatar-6.svg";
import Avatar7 from "../assets/images/avatar-7.svg";

export interface IContact {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  type: string;
};

const personalContacts = [
  { 
    id: 0,
    avatar: Avatar1,
    firstName: "Damian",
    lastName: "Marley",
    type: contactType.STARRED,
  },
  { 

    id: 1,
    avatar: Avatar2,
    firstName: "Louis",
    lastName: "Tornton",
    type: contactType.EXTERNAL,
  },
  { 
    id: 2,
    avatar: Avatar3,
    firstName: "Betty",
    lastName: "Roggers",
    type: contactType.STARRED,
  },
  {
    id: 3,
    avatar: Avatar4,
    firstName: "Simone",
    lastName: "Wilkinson",
    type: contactType.STARRED,
  },
  {
    id: 4,
    avatar: Avatar5,
    firstName: "Diana",
    lastName: "Woodstone",
    type: contactType.STARRED,
  },
  {
    id: 5,
    avatar: Avatar6,
    firstName: "Nicholas",
    lastName: "Strattenberg",
    type: contactType.CLOUD,
  },
  {
    id: 6,
    avatar: Avatar7,
    firstName: "Sarah",
    lastName: "Brightman",
    type: contactType.CLOUD,
  },
];

export default personalContacts;