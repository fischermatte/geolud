export interface ContactRequest {
  name?: string;
  email: string;
  message: string;
}

export interface Delivery {
  sentAt: Date;
}
