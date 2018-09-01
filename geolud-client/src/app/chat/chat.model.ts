/**
 * Message item that is rendered in UI.
 */
export interface ChatMessageItem {
  username: string;
  message: string;
  timestamp: Date;
  isFromCurrentUser: boolean;
  isLogin: boolean;
}
