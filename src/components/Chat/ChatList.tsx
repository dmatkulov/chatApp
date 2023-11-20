import ChatItem from './ChatItem';
import {GetMessage} from '../../types';
import React from 'react';

interface Props {
  inbox: GetMessage[];
}

const ChatList: React.FC<Props> = ({inbox}) => {
  return (
    <>
      {inbox.length > 0 ? (
        <div className="col-8 mx-auto bg-light-subtle p-3 d-flex flex-column-reverse">
          {inbox.map((message) => (
            <ChatItem inbox={message} key={message._id}/>
          ))}
        </div>
      ) : (
        <div className="col-8 mx-auto bg-light-subtle d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatList;