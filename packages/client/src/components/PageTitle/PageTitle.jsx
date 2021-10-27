import React from "react";
import { Link, useLocation } from "react-router-dom";

import { PAGES } from "../../constants/routes";

import Button from "../Button";

export default function PageTitle({
  title = "Default title",
  subtitle,
  isHome = false,
}) {
  const location = useLocation();

  return (
    <div className="d-flex justify-content-between align-items-center w-100 px-5 mb-5">
      <h1 className="fnt-light fnt-thin m-0 text-uppercase">
        {title}
        {subtitle && <p className="fnt-bold d-inline-block mb-0">{subtitle}</p>}
      </h1>
      {isHome ? (
        <Link
          to={{
            pathname: `${PAGES.UPLOAD}`,
            state: {
              referrer: location.pathname,
            },
          }}
        >
          <Button>Upload meme</Button>
        </Link>
      ) : (
        <Button isBackButton isDark>
          Back
        </Button>
      )}
    </div>
  );
}
