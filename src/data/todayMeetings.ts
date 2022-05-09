import ProfilAvatar from "../assets/images/profil-avatar.svg";
import Avatar1 from "../assets/images/avatar-1.svg";
import Avatar2 from "../assets/images/avatar-2.svg";
import Avatar3 from "../assets/images/avatar-3.svg";
import Avatar4 from "../assets/images/avatar-4.svg";
import Avatar5 from "../assets/images/avatar-5.svg";
import Avatar6 from "../assets/images/avatar-6.svg";
import Avatar7 from "../assets/images/avatar-7.svg";

interface IParticipants {
  id: number;
  avatar: string;
}

export interface IMeeting{
  id: string;
  title: string;
  startAt: string;
  endAt: string;
  participants: IParticipants[];
}

const todayMeetings = [
    {
      id: "707 904 6594",
      title: "Design Daily Zoom Meeting",
      startAt: "10:00",
      endAt: "11:30",
      participants: [
        {
          id: 0,
          avatar: ProfilAvatar
        },
        { 
          id: 1,
          avatar: Avatar1
        },
        { 
          id: 2,
          avatar: Avatar2
        },
        { 
          id: 3,
          avatar: Avatar3
        },
        {
          id: 4,
          avatar: Avatar4
        },
        {
          id: 5,
          avatar: Avatar5
        }
      ]
    },
    {
      id: "707 904 6595",
      title: "Daily Standup Tech Conference",
      startAt: "14:00",
      endAt: "16:30",
      participants: [
        {
          id: 3,
          avatar: Avatar3
        },
        {
          id: 4,
          avatar: Avatar4
        },
        {
          id: 5,
          avatar: Avatar5
        }
      ]
    },
    {
      id: "707 904 6596",
      title: "Marketing Strategy Development",
      startAt: "10:00",
      endAt: "11:30",
      participants: [
        {
          id: 6,
          avatar: Avatar6
        },
        {
          id: 7,
          avatar: Avatar7
        },
      ]
    }
  ];

  export default todayMeetings;