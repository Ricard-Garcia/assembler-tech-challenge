/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOutAction } from "../../redux/user/actions";
import { PAGES } from "../../constants/routes";

import Button from "../Button";

export default function Header() {
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    setIsLoading(true);
    dispatch(signOutAction());
    // setLocalStorage(
    //   {
    //     email: "",
    //     firstName: "",
    //     isLogged: false,
    //     mongoId: "",
    //     profilePicture: "",
    //   },
    //   "User state"
    // );
  };

  return (
    <header className="header-wrapper d-flex justify-content-between align-items-center px-5">
      <Link
        className="fnt-label fnt-bold m-0"
        to={{
          pathname: `${PAGES.HOME}`,
          state: {
            referrer: location.pathname,
          },
        }}
      >
        Memerize
      </Link>
      {userState.isLogged && (
        <div className="header-left d-flex align-items-center">
          <p className="fnt-text fnt-regular m-0">
            Welcome, <span className="fnt-bold">{userState.firstName}</span>
          </p>
          <Button classNames="ms-3" handleClick={handleSignOut} isDark>
            Sign out
          </Button>
        </div>
      )}
    </header>
  );
}
