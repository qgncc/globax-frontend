import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./theme.scss";
import "./index.scss";
import "./utils.scss";
import { ModalProvider } from "./contexts/ModalContext.tsx";
import { MODALS } from "./modals/names.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider structure={{ [MODALS.USER_MODAL]: false }}>
      <App />
    </ModalProvider>
  </React.StrictMode>,
);
