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
  firstname: string;
  lastname: string;
};

const contacts = [
  { 
    id: 0,
    avatar: Avatar1,
    firstname: "Damian",
    lastname: "Marley",
  },
  { 

    id: 1,
    avatar: Avatar2,
    firstname: "Louis",
    lastname: "Tornton",
  },
  { 
    id: 2,
    avatar: Avatar3,
    firstname: "Betty",
    lastname: "Roggers",
  },
  {
    id: 3,
    avatar: Avatar4,
    firstname: "Simone",
    lastname: "Wilkinson",
  },
  {
    id: 4,
    avatar: Avatar5,
    firstname: "Diana",
    lastname: "Woodstone",
  },
  {
    id: 5,
    avatar: Avatar6,
    firstname: "Nicholas",
    lastname: "Strattenberg",
  },
  {
    id: 6,
    avatar: Avatar7,
    firstname: "Sarah",
    lastname: "Brightman",
  },
];

export default contacts;