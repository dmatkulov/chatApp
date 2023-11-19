import ChatItem from './ChatItem';
import {GetMessage} from '../../types';
import React from 'react';

interface Props {
  inbox: GetMessage[];
}
const ChatList: React.FC<Props> = ({inbox}) => {
  return (
    <div className="col-8 mx-auto">
      {inbox.map((message) => (
        <ChatItem inbox={message} key={message._id}/>
      ))}
      Chat list
    </div>
  );
};

export default ChatList;