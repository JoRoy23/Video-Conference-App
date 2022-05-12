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
  location: string;
  homePhone: string;
  workPhone?: string;
  timeZone: string;
};

const personalContacts = [
  { 
    id: 0,
    avatar: Avatar1,
    firstName: "Damian",
    lastName: "Marley",
    type: contactType.STARRED,
    location: "Nebraska, USA",
    homePhone: "355-983-7263",
    workPhone: "234-424-9823",
    timeZone: "-4h, GMT",
  },
  { 

    id: 1,
    avatar: Avatar2,
    firstName: "Louis",
    lastName: "Tornton",
    type: contactType.EXTERNAL,
    location: "Los Angeles, USA",
    homePhone: "843-439-9329",
    workPhone: "424-982-9823",
    timeZone: "-10h, GMT",
  },
  { 
    id: 2,
    avatar: Avatar3,
    firstName: "Betty",
    lastName: "Roggers",
    type: contactType.STARRED,
    location: "San Diego, USA",
    homePhone: "533-987-0183",
    workPhone: "897-982-9021",
    timeZone: "-6h, GMT",
  },
  {
    id: 3,
    avatar: Avatar4,
    firstName: "Simone",
    lastName: "Wilkinson",
    type: contactType.STARRED,
    location: "San Antonio, USA",
    homePhone: "533-762-0923",
    workPhone: "332-982-0922",
    timeZone: "-2h, GMT",
  },
  {
    id: 4,
    avatar: Avatar5,
    firstName: "Diana",
    lastName: "Woodstone",
    type: contactType.STARRED,
    location: "San Diego, USA",
    homePhone: "533-762-0923",
    workPhone: "872-092-9287",
    timeZone: "-6h, GMT",
  },
  {
    id: 5,
    avatar: Avatar6,
    firstName: "Nicholas",
    lastName: "Strattenberg",
    type: contactType.CLOUD,
    location: "Colorado, USA",
    homePhone: "981-139-9173",
    workPhone: "897-982-0912",
    timeZone: "-12h, GMT",
  },
  {
    id: 6,
    avatar: Avatar7,
    firstName: "Sarah",
    lastName: "Brightman",
    type: contactType.CLOUD,
    location: "Montana, USA",
    homePhone: "723-917-0133",
    workPhone: "872-098-9012",
    timeZone: "-8h, GMT",
  },
];

export default personalContacts;