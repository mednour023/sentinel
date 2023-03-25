import React from "react";
import "./popup.css";
import "../index.css";
import { Button } from "../components/ui/button";
import { useAddReportedUrl } from "../../api";

const PopupContent = () => {
  const { mutateAsync: useAddPageAsync,isLoading } = useAddReportedUrl();
  const addPage =  () => {

    chrome.tabs.query({ active: true }, async (tabs) => {
      const tab = tabs[0];
      let originUrl = tab.url.replace(/^https?:\/\//, '').split('/')[0]
      await useAddPageAsync({ url: originUrl, register_count: 1 });
    });
    
  };
  return (
    <div className="popup-container">
      <img src="../icons/sentinel.png" alt="sentinel" />
      <Button
        title={"Disable sentinel"}
        rounded={true}
        variant={"sentinel-default"}
      />
      <Button
        title={"Report website"}
        rounded={true}
        variant={"sentinel-default"}
        onHandleClick={addPage}
        disabled={true}
      />
      <img src="../icons/logoApp.png" alt="logo" className="logo-popup" />
    </div>
  );
};
export default PopupContent;
