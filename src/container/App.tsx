import ChatList from '../components/Chat/ChatList';
import ChatForm from '../components/ChatForm/ChatForm';
import {useEffect, useState} from 'react';
import {GetMessage} from '../types';
import {request} from '../request';

let url = 'http://146.185.154.90:8000/messages';
const App = () => {
  const [messages, setMessages] = useState<GetMessage[]>([]);
  
  const dateTime: string | null = null;
  
  useEffect(() => {
    const fetchData = async () => {
      if (dateTime !== null) {
        url += '?datetime=' + dateTime;
      }
      try {
        const messages: GetMessage[] = await request<GetMessage[]>(url);
        const newMessage = messages.map((message) => ({
          ...message,
        }));
        setMessages(newMessage);
      } catch (e) {
        console.log('Something went wrong: ' + e);
      }
    };
    void fetchData();
    
    setInterval(() => {
      void fetchData();
    }, 2000);
  }, []);
  
  return (
    <div className="container">
      <ChatForm/>
      <ChatList
        inbox={messages}/>
    </div>
  );
};

export default App;
