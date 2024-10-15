import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, 
  // persistor 
} from './redux/store';
// import { PersistGate } from "redux-persist/integration/react";

import { App } from './App';
import { GlobalStyles } from './styles/GlobalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
);
