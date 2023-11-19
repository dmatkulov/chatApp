import ChatList from '../components/Chat/ChatList';
import ChatForm from '../components/ChatForm/ChatForm';
import {useEffect, useState} from 'react';
import {GetMessage} from '../types';

const url = 'http://146.185.154.90:8000/messages';
const App = () => {
  const [messages, setMessages] = useState<GetMessage[]>([
    {
      message: "Hello, world!",
      author: "Admin",
      datetime: "2017-12-21T10:20:39.586Z",
      _id: "5a3b8af7b96eb02c84d640bd"
    }
  ]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      
      if (response.ok) {
        const messages: GetMessage[] = await response.json();
        const newMessage = messages.map((message) => ({
          ...message,
        }));
        setMessages(newMessage);
      }
    };
    
    void fetchData();
  }, []);
  
  return (
    <>
      <ChatList inbox={messages}/>
      <ChatForm/>
    </>
  );
};

export default App;
