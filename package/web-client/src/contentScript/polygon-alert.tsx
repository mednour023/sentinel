import * as React from "react";

function PolygonAlert(props) {
  return (
    <svg
      width={92}
      height={80}
      viewBox="0 0 92 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M36.16 17.412c4.381-7.688 15.464-7.688 19.845 0l25.907 45.46c4.34 7.614-1.16 17.076-9.923 17.076H20.176c-8.764 0-14.262-9.462-9.923-17.076l25.907-45.46z"
        fill="#6D3FE1"
        fillOpacity={0.31}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.082 53.298a3.807 3.807 0 003.807-3.807V30.456a3.807 3.807 0 00-7.614 0v19.035a3.807 3.807 0 003.807 3.807z"
        fill="#6D3FE1"
      />
      <circle cx={46.0824} cy={64.7196} r={3.80704} fill="#6D3FE1" />
    </svg>
  );
}

export default PolygonAlert;
