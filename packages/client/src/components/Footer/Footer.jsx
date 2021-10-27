import React from "react";

export default function Footer() {
  return (
    <footer className="footer-wrapper d-flex justify-content-beetween align-items-center px-5">
      <div className="col p-0">
        <p className="fnt-text fnt-regular m-0 fnt-white">
          Memerize &copy; 2021
        </p>
      </div>
      <div className="col p-0">
        <p className="fnt-text fnt-bold text-end m-0 fnt-white">
          Developed with love by Ricard Garcia
        </p>
      </div>
    </footer>
  );
}
