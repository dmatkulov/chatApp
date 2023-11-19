import ChatList from '../components/Chat/ChatList';
import ChatForm from '../components/ChatForm/ChatForm';
import {useEffect, useState} from 'react';
import {GetMessage} from '../types';

let url = 'http://146.185.154.90:8000/messages';
const App = () => {
  const [messages, setMessages] = useState<GetMessage[]>([
    {
      message: "",
      author: "",
      datetime: "",
      _id: ""
    }
  ]);
  
  const dateTime: string | null = null;
  
  useEffect(() => {
    if (dateTime !== null) {
      url += '?datetime=' + dateTime;
    }
    
    setInterval(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        
        if (response.ok) {
          const messages: GetMessage[] = await response.json();
          const newMessage = messages.map((message) => ({
            ...message,
          }));
          setMessages(newMessage);
          console.log('after 2 seconds');
        }
      };
      void fetchData();
      }, 2000);
  }, []);
  
  return (
    <div className="container">
      <ChatForm/>
      <ChatList inbox={messages}/>
    </div>
  );
};

export default App;
