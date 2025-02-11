import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatGPTAdMaker from './main/ChatGPTAdMaker.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChatGPTAdMaker />
  </React.StrictMode>
); 