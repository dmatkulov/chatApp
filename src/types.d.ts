export interface GetMessage {
  _id: string;
  message: string;
  author: string;
  datetime: string;
}

export interface PostMessage {
  message: string;
  author: string;
  datetime: string;
  _id: string;
}