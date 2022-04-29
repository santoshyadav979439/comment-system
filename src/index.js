import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './store/reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
import 'normalize.css';

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
