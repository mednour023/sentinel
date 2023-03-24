import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";
import "../index.css";
import { Button } from "../components/ui/button";

const popup = (
  <div className="popup-container" >
    <img src='../icons/sentinel.png' alt='sentinel' />
    <Button title={'Disable sentinel'} rounded={true} variant={'sentinel-default'} />
    <Button title={'Report website'} rounded={true} variant={'sentinel-default'} />
    <img src='../icons/logoApp.png' alt='logo' className="logo-popup" />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(popup);
