import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { GlobalStyles } from './styles/GlobalStyles';
import { App } from './App';
import { ThemeWrapper } from './components/Theme/ThemeWrapper';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrapper>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </ThemeWrapper>
      </PersistGate>
    </Provider>
  </StrictMode>
);
