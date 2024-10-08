// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import "./App.css";
// import App from "./App.jsx";
// import.meta.env.VITE_COIN_API_KEY;

// //import "./index.css"
// // Import BrowserRouter and rename it to Router
// import { BrowserRouter as Router } from "react-router-dom";

// // Wrap the App component with the Router component to enable the router features.
// ReactDOM.render(
//   <StrictMode>

//     <Router>
//       <App />
//     </Router>

//   </StrictMode>,
//   document.getElementById("root")
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
