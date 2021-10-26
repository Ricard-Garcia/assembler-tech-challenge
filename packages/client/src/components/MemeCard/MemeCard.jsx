import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PAGES } from "../../constants/routes";

import "./MemeCard.scss";

export default function MemeCard({ classNames, memeId, memeUrl, cols }) {
  const location = useLocation();

  const cardClasses = `${classNames} col col-${cols} meme-card p-0`;
  return (
    <Link
      className={cardClasses}
      to={{
        pathname: `${PAGES.SINGLE_MEME}/${memeId}`,
        state: {
          referrer: location.pathname,
        },
      }}
    >
      <img src={memeUrl} alt="test" />
    </Link>
  );
}
