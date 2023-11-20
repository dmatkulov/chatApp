import React, {useState} from 'react';
import {PostMessage} from '../../types';
import {request} from '../../request';

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
    
    await request<PostMessage>(url, {
      method: 'post',
      body: data
    });
    
    setMessage((prev) => ({
      ...prev,
      message: '',
      author: '',
    }));
  };
  
  return (
    <form className="col-8 mx-auto row align-items-end mb-3" onSubmit={postMessage}>
      <div className="col-3">
        <label htmlFor="author"></label>
        <input
          placeholder="Your name"
          type="text"
          name="author"
          id="author"
          required
          value={message.author}
          onChange={sendMessage}
          className="form-control"
        />
      </div>
      <div className="col-5">
        <label htmlFor="message"></label>
        <input
          placeholder="Your message"
          type="text"
          name="message"
          id="message"
          required
          value={message.message}
          onChange={sendMessage}
          className="form-control"
        />
      </div>
      <div className="col-4">
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </div>
    </form>
  );
};

export default ChatForm;