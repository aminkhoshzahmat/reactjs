import Counter from "./Counter";
import React from "react";
import { ReactDOM } from "react";
// harja ba reactdom kar dari bayad khode react ham bashe, jai ke be render niaz dari

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<Counter />);
