import React from "react";

import "./MemeCard.scss";

export default function MemeCard({ classNames, cols }) {
  const cardClasses = `${classNames} col col-${cols} meme-wrapper`;
  return (
    <div className={cardClasses}>
      <p>Meme</p>
    </div>
  );
}
