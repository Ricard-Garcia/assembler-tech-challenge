/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
  };

  return (
    <header className="header-wrapper d-flex justify-content-between align-items-center row px-5">
      <Link
        className="fnt-label fnt-bold fnt-light-primary m-0 col-6"
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
        <div className="header-left d-flex align-items-center justify-content-between row col-6">
          {/* Categories */}
          <div className="categoryies-wrapper d-flex justify-content-between fnt-light-primary col col-5 p-0">
            {/* Funny */}
            <NavLink
              className="fnt-text fnt-regular text-uppercase"
              activeClassName="active-navlink"
              to={{
                pathname: `${PAGES.CATEGORY}/funny`,
                state: {
                  referrer: location.pathname,
                },
              }}
            >
              Funny
            </NavLink>
            {/* Angry */}
            <NavLink
              className="fnt-text fnt-regular text-uppercase"
              activeClassName="active-navlink"
              to={{
                pathname: `${PAGES.CATEGORY}/angry`,
                state: {
                  referrer: location.pathname,
                },
              }}
            >
              Angry
            </NavLink>
            {/* Sad */}
            <NavLink
              className="fnt-text fnt-regular text-uppercase"
              activeClassName="active-navlink"
              to={{
                pathname: `${PAGES.CATEGORY}/sad`,
                state: {
                  referrer: location.pathname,
                },
              }}
            >
              Sad
            </NavLink>
            {/* Happy */}
            <NavLink
              className="fnt-text fnt-regular text-uppercase"
              activeClassName="active-navlink"
              to={{
                pathname: `${PAGES.CATEGORY}/happy`,
                state: {
                  referrer: location.pathname,
                },
              }}
            >
              Happy
            </NavLink>
            {/* Art */}
            <NavLink
              className="fnt-text fnt-regular text-uppercase"
              activeClassName="active-navlink"
              to={{
                pathname: `${PAGES.CATEGORY}/art`,
                state: {
                  referrer: location.pathname,
                },
              }}
            >
              Art
            </NavLink>
          </div>

          <p className="fnt-text fnt-regular text-center m-0 col col-4 ">
            Welcome, <span className="fnt-bold">{userState.firstName}</span>
          </p>
          <Button classNames="col col-3" handleClick={handleSignOut} isDark>
            Sign out
          </Button>
        </div>
      )}
    </header>
  );
}
