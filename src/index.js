import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { store, persistor } from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
         
          <App />
          <GlobalStyle />
          
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
