import React from "react";
import "./button.css";

import { Loader } from "rsuite";

export const Button = ({
  title,
  rounded,
  variant,
  children,
  onHandleClick,
  disabled,
  isLoading,
}: any) => {
  const variant_btn: string = variant;

  const itsRounded = rounded ? "rounded" : "normal-round";
  return (
    <button
      disabled={disabled}
      onClick={() => onHandleClick()}
      className={`${itsRounded} sentinel-button-container ${variant_btn}`}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {title}
          {children}
        </>
      )}
    </button>
  );
};
