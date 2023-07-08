import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { persistor, store } from 'redux/store';
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/project-team_developer_007_react">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
