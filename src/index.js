import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

// import fonts
import './fonts/Helvetica/Helvetica.ttf';
import './fonts/Inter/Inter-VariableFont_slnt,wght.ttf';
import './fonts/Montserrat/Montserrat-VariableFont_wght.ttf';
import './fonts/Poppins/Poppins-Black.ttf';
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Medium.ttf';
import './fonts/Poppins/Poppins-Regular.ttf';
import './fonts/Poppins/Poppins-SemiBold.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-team_developer_007_react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
