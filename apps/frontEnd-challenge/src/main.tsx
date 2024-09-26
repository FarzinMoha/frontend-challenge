import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ReactNotifications/>
      <App />
    </BrowserRouter>
  </StrictMode>
);
