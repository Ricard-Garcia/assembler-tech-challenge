import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signOutAction } from "../../redux/user/actions";

import Button from "../../components/Button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    setIsLoading(true);
    dispatch(signOutAction());
  };

  return (
    <div>
      <h1>Home page</h1>
      <Button handleClick={handleSignOut}>Sign out</Button>
    </div>
  );
}
