import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { StrictMode } from "react";

const root = createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
