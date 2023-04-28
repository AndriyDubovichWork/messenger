export type MessageT = {
  text: string;
  seen: boolean;
  sendTime: string;
};

export type ChatT = {
  userName: string;
  messages: MessageT[];
};
export type ChatsT = ChatT[];

const rawData = {
  chats: [
    {
      userName: "Andriy",
      messages: [
        {
          text: "hello",
          seen: true,
          sendTime: "19:00",
        },
      ],
    },
    {
      userName: "Ivan",
      messages: [
        {
          text: "hi",
          seen: true,
          sendTime: "19:00",
        },
      ],
    },
  ],
};

export default rawData;
