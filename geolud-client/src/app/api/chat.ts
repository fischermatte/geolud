export enum ChatMessageType {
  LOGIN = 'LOGIN', CHAT = 'CHAT'
}

export class ChatMessage {
  user: ChatUser;
  text: string;
  type: ChatMessageType;
  timestamp?: Date;

  constructor(text: string, user: ChatUser, type: ChatMessageType) {
    this.text = text;
    this.user = user;
    this.type = type;
  }
}

export interface ChatUser {
  id: string;
  name: string;
}
