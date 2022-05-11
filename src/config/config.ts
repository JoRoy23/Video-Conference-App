import { IContact } from "../data/contacts";
import { IParticipant } from "../data/meetings";

export const dateFormat = {
    SHORT_TIME: "hh:mm",
    LONG_DATE: "dddd, DD MMMM YYYY"
};

export const contactType = {
  STARRED: "starred",
  EXTERNAL: "external",
  CLOUD: "cloud",
};

export const readableContactType = {
  [contactType.STARRED]: "Starred",
  [contactType.EXTERNAL]: "External",
  [contactType.CLOUD]: "Cloud",
};

export const contactTab = {
  CONTACTS: "contacts",
  CHANNELS: "channels",
};

export const readableContactTab = {
  [contactTab.CONTACTS]: "Contacts",
  [contactTab.CHANNELS]: "Channels",
};

export const meetingStatus = {
    UPCOMING: "upcoming",
    RECORDED: "recorded",
};

export const readableMeetingStatus = {
    [meetingStatus.UPCOMING]: "Upcoming",
    [meetingStatus.RECORDED]: "Recorded",
};

export const getFullName = (user: IContact | IParticipant) => {
  const { firstName, lastName } = user;

  return `${firstName} ${lastName}`;
};