import React from "react";
import "../index.css";
import PolygonAlert from "./polygon-alert";
import { Button } from "../components/ui/button";
import CheckIcon from "./check";
import { useReportedPages, usePageByUrl } from "../../api";

const ContentScript = () => {
  const url = window.location.origin.replace(/^https?:\/\//, "");
  const [pageUrl, setPageUrl] = React.useState(url);
  const { data, isSuccess, refetch, isLoading, isFetching } =
    usePageByUrl(pageUrl);

  console.log("pageUrl", data);

  return (
    <>
      {data && (
        <div className="cs-container">
          <div className="background-popup-container">
            <PolygonAlert />
            <div className="container-title">
              Sentinel has <span>detected</span> this as a phishing website!
            </div>
            <div className="btn-container">
              <Button
                title={"Visit the real website"}
                variant={"sentinel-primary"}
                rounded={false}
              >
                <CheckIcon />
              </Button>
              <Button
                title={"Continue Anyways"}
                variant={"sentinel-outline"}
                rounded={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentScript;
