export type MessageT = {
  text: string;
  seen: boolean;
  sendTime: string;
  sender: string;
  MessageID: string;
};

export type ChatT = {
  userName: string;
  userImage: string;
  messages: MessageT[];
};
export type ChatsT = ChatT[];

const rawData: { chats: ChatsT } = {
  chats: [
    {
      userName: 'Jesica',
      userImage: require('./user1.jpg'),
      messages: [
        {
          text: 'hello',
          seen: true,
          sendTime: '19:00',
          sender: 'user1',
          MessageID: 'randomID1',
        },
      ],
    },
    {
      userName: 'Morty',
      userImage: require('./user2.jpg'),
      messages: [
        {
          text: 'hi',
          seen: true,
          sendTime: '19:00',
          sender: 'user1',
          MessageID: 'randomID2',
        },
      ],
    },
  ],
};

export default rawData;
