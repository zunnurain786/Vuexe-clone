import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../Context/auth";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
