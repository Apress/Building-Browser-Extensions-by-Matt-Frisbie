import React from "react";
import { createRoot } from "react-dom/client";
import { Popup } from "./Popup";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(<Popup />);
