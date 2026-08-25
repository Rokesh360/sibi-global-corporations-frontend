import React from "react";

export default function Loader() {
  return (
    <div className="sgc-loader">
      <div className="sgc-loader-content">

        <div className="sgc-loader-logo">
          <img
            src="/assets/sibi-logo.png"
            alt="Sibi Global Corporation"
          />
        </div>

        <div className="sgc-loader-spinner">
          <span></span>
        </div>

        <p>Loading...</p>

      </div>
    </div>
  );
}