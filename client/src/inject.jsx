import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

const container = document.createElement("div");
container.id = "leetcode-chat-root";

document.body.appendChild(container);

createRoot(container).render(<App />);

//
//
//
//
//
//
//
//  this is a SEPERATION
//
//
//
//
//

// import { createRoot } from "react-dom/client";
// import DraggableChat from "./wrapper/DraggableChat.jsx";
// import App from "./App.jsx";
// import "./App.css";

// const container = document.createElement("div");
// container.id = "leetcode-chat-root";

// const shadowRoot = container.attachShadow({ mode: "open" });

// document.body.appendChild(container);

// const styleSheet = document.createElement("style");
// styleSheet.textContent = `@import "tailwindcss"`;
// shadowRoot.appendChild(styleSheet);

// createRoot(container).render(<App />);

//
//
//
//
//
//
//
//  this is a SEPERATION
//
//
//
//
//
