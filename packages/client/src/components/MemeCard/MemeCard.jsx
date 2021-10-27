import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PAGES } from "../../constants/routes";

import "./MemeCard.scss";

export default function MemeCard({
  classNames,
  memeId,
  memeName,
  memeTag,
  memeUrl,
  cols,
}) {
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
      <div className="meme-cover d-flex justify-content-center align-items-center">
        <p className="fnt-label fnt-bold fnt-light text-uppercase m-0">
          {memeName}
        </p>
      </div>
      <img src={memeUrl} alt="test" />
    </Link>
  );
}
