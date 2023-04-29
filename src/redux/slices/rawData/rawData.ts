export type MessageT = {
  text: string;
  seen: boolean;
  sendTime: string;
  sender: string;
};

export type ChatT = {
  userName: string;
  messages: MessageT[];
};
export type ChatsT = ChatT[];

const rawData: { chats: ChatsT } = {
  chats: [
    {
      userName: "Andriy",
      messages: [
        {
          text: "hello",
          seen: true,
          sendTime: "19:00",
          sender: "user1",
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
          sender: "user1",
        },
      ],
    },
  ],
};

export default rawData;
