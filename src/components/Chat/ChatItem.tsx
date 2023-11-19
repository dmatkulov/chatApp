import {GetMessage} from '../../types';
import React from 'react';

interface Props {
  inbox: GetMessage
}

const ChatItem: React.FC<Props> = ({inbox: inbox}) => {
  return (
    <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Author: {inbox.author}</h5>
          <p className="card-text">Message: {inbox.message}</p>
          <p className="card-text"><small className="text-body-secondary">Date: {inbox.datetime}</small></p>
        </div>
    </div>

);
};

export default ChatItem;