// @ts-nocheck
import React from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

const App = () => {
  console.log("Render App");
  return (
    <div>
      <Search />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
