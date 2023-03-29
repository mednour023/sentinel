import React from "react";

import { createRoot } from "react-dom/client";
import "../index.css";
import ContentScript from "./contentScript";
import APIProvider from "../../api/APIProvider";

const init = () => {
  const appContainer = document.createElement("div");
  if (!appContainer) {
    throw new Error("can not fin appContainer");
  }
  document.body.appendChild(appContainer);
  const root = createRoot(appContainer);
  console.log("appContainer", appContainer);
  root.render(
    <APIProvider>
      <ContentScript />
    </APIProvider>
  );
};

init();
