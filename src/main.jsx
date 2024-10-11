import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path="/send" element={<App />} />
        </Routes>
      </Router>
  </StrictMode>
);
