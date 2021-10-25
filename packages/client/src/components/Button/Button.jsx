import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PAGES } from "../../constants/routes";

export default function Button({
  submitButton,
  handleClick = () => {},
  isBackButton,
  children,
}) {
  const location = useLocation();
  const history = useHistory();

  const goBack = () => {
    if (location.state) {
      history.push(location.state.referrer);
    }
    history.push(`${PAGES.HOME}`);
  };

  return (
    <button
      className="btn btn-dark"
      type={submitButton ? "submit" : "button"}
      onClick={isBackButton ? goBack : handleClick}
    >
      {children}
    </button>
  );
}
