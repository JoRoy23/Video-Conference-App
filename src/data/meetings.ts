import ProfilAvatar from "../assets/images/profil-avatar.svg";
import Avatar1 from "../assets/images/avatar-1.svg";
import Avatar2 from "../assets/images/avatar-2.svg";
import Avatar3 from "../assets/images/avatar-3.svg";
import Avatar4 from "../assets/images/avatar-4.svg";
import Avatar5 from "../assets/images/avatar-5.svg";
import Avatar6 from "../assets/images/avatar-6.svg";
import Avatar7 from "../assets/images/avatar-7.svg";
export interface IParticipant {
  id: number;
  avatar?: string;
  firstName: string;
  lastName: string;
}
export interface IMeeting{
  id: string;
  title: string;
  description: string;
  startAt: string;
  endAt: string;
  status: string;
  participants: IParticipant[];
}

const meetings = [
    {
      id: "707 904 6594",
      title: "Design Daily Zoom Meeting",
      description: "Everyday's Standup Meeting discussing all the team work and tasks done. Check out all team members and let them report about their progress.",
      startAt: "10:00",
      endAt: "11:30",
      status: "upcoming",
      participants: [
        {
          id: 0,
          avatar: ProfilAvatar,
          firstName: "Michelle",
          lastName: "Williams",
        },
        { 
          id: 1,
          avatar: Avatar1,
          firstName: "Damian",
          lastName: "Marley",
        },
        { 

          id: 2,
          avatar: Avatar2,
          firstName: "Louis",
          lastName: "Tornton",
        },
        { 
          id: 3,
          avatar: Avatar3,
          firstName: "Betty",
          lastName: "Roggers",
        },
        {
          id: 4,
          avatar: Avatar4,
          firstName: "Simone",
          lastName: "Wilkinson",
        },
        {
          id: 5,
          avatar: Avatar5,
          firstName: "Diana",
          lastName: "Woodstone",
        }
      ]
    },
    {
      id: "707 904 6595",
      title: "Daily Standup Tech Conference",
      description: "Everyday's Standup Meeting discussing all the team work and tasks done. Check out all team members and let them report about their progress.",
      startAt: "14:00",
      endAt: "16:30",
      status: "upcoming",
      participants: [
        { 
          id: 3,
          avatar: Avatar3,
          firstName: "Betty",
          lastName: "Roggers",
        },
        {
          id: 4,
          avatar: Avatar4,
          firstName: "Simone",
          lastName: "Wilkinson",
        },
        {
          id: 5,
          avatar: Avatar5,
          firstName: "Diana",
          lastName: "Woodstone",
        }
      ]
    },
    {
      id: "707 904 6596",
      title: "Marketing Strategy Development",
      description: "Everyday's Standup Meeting discussing all the team work and tasks done. Check out all team members and let them report about their progress.",
      startAt: "10:00",
      endAt: "11:30",
      status: "upcoming",
      participants: [
        {
          id: 6,
          avatar: Avatar6,
          firstName: "Nicholas",
          lastName: "Strattenberg",
        },
        {
          id: 7,
          avatar: Avatar7,
          firstName: "Sarah",
          lastName: "Brightman",
        },
      ]
    }
  ];

  export default meetings;