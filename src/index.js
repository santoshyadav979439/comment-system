import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./store/reducer";
const store = createStore(reducer);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
