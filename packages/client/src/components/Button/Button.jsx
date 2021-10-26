import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PAGES } from "../../constants/routes";

export default function Button({
  classNames,
  submitButton,
  handleClick = () => {},
  isBackButton,
  isDark,
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

  const buttonClasses = `${classNames} btn text-uppercase px-4`;
  return (
    <button
      className={
        !isDark
          ? `${buttonClasses} btn-outline-light`
          : `${buttonClasses} btn-outline-dark`
      }
      type={submitButton ? "submit" : "button"}
      onClick={isBackButton ? goBack : handleClick}
    >
      {children}
    </button>
  );
}
