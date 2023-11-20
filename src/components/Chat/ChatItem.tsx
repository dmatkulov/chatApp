import {GetMessage} from '../../types';
import React from 'react';

interface Props {
  inbox: GetMessage
}

const ChatItem: React.FC<Props> = React.memo(function ChatBubble({inbox}) {
  const date = new Date(inbox.datetime);
  const currentDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}`;
  
  return (
    <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title text-primary">Author: {inbox.author}</h5>
          <p className="card-text">Message: {inbox.message}</p>
          <p className="card-text"><small className="text-body-secondary">Sent at {currentDate}</small></p>
        </div>
    </div>

);
}, (prevProps, nextProps) => {
  return prevProps.inbox.author === nextProps.inbox.author && prevProps.inbox.message === nextProps.inbox.message && prevProps.inbox.datetime === nextProps.inbox.datetime;
});

export default ChatItem;