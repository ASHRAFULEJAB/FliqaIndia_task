import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DoctorsProvider from "./Context/DoctorsContext/DoctorsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DoctorsProvider>
      <App />
    </DoctorsProvider>
  </React.StrictMode>
);
