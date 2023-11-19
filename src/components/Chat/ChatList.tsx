import ChatItem from './ChatItem';
import {GetMessage} from '../../types';
import React from 'react';

interface Props {
  inbox: GetMessage[];
}
const ChatList: React.FC<Props> = ({inbox}) => {
  return (
    <div className="col-8 mx-auto bg-light-subtle p-3 d-flex flex-column-reverse"
         style={{
           height: '80vh',
           overflow: 'scroll'
         }}
    >
      {inbox.map((message) => (
        <ChatItem inbox={message} key={message._id}/>
      ))}
    </div>
  );
};

export default ChatList;