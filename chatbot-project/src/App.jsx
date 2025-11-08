import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'

function App() {
        const [chatMessages, setChatMessages] = useState([
          // {
          //   message: "hello chatbot",
          //   sender: "user",
          //   id: "id1"
          // },{
          //   message: "Hello! how can I help you?",
          //   sender: "robot",
          //   id: "id2"
          // },{
          //   message: "can you get me today's date?",
          //   sender: "user",
          //   id: "id3" 
          // },{
          //   message: "sure, today's date is 20th June 2024",
          //   sender: "robot",
          //   id: "id4"
          // }
        ]);
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];

        return (
          <div className="app-container">
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
