import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom"
// import "./Common_Resource/css/bootstrap.css";
// import "./Common_Resource/css/styles.css";

// import './index.css'
import App from "./App.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Import Bootstrap CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
