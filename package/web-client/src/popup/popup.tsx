import React from "react";
import { createRoot } from "react-dom/client";
import APIProvider from "../../api/APIProvider";
import PopupContent from "./popupContent";

// const addPage = () => {
//   useAddReportedUrl()
// }

const Popup = (
  <APIProvider>
    <PopupContent />
  </APIProvider>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(Popup);
