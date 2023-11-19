import React, {useState} from 'react';
import {PostMessage} from '../../types';

const ChatForm: React.FC = () => {
  const [message, setMessage] = useState<PostMessage>({
    message: '',
    author: '',
    datetime: '',
    _id: '',
  });
  
  
  const sendMessage = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMessage((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
  const postMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = 'http://146.185.154.90:8000/messages';
    
    const data = new URLSearchParams();
    data.set('message', message.message);
    data.set('author', message.author);
    
    await fetch(url, {
      method: 'post',
      body: data,
    });
  };
  
  return (
    <form className="col-8 mx-auto" onSubmit={postMessage}>
      <div className="form-group">
        <label htmlFor="author"></label>
        <input
          placeholder="Your name"
          type="text"
          name="author"
          id="author"
          value={message.author}
          onChange={sendMessage}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message"></label>
        <input
          placeholder="Your message"
          type="text"
          name="message"
          id="message"
          value={message.message}
          onChange={sendMessage}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">Send</button>
    </form>
  );
};

export default ChatForm;