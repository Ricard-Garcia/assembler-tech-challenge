import React from "react";

import "./MemeCard.scss";

export default function MemeCard({ classNames, memeUrl, cols }) {
  const cardClasses = `${classNames} col col-${cols} meme-wrapper p-0`;
  return (
    <div className={cardClasses}>
      <img src={memeUrl} alt="test" />
    </div>
  );
}
