import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { signInAction } from "./redux/user/actions";
import { loadLocalStorageItems, setLocalStorage } from "./utils/localStorage";

import "./App.css";

import RouterWrapper from "./components/Router/RouterWrapper";

function App() {
  // const [loggedUserState, setLoggedUserState] = useState(false);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const userLocalStorage = loadLocalStorageItems("User state");
  //   console.log(userLocalStorage);

  //   const loggedUser = {
  //     firstName: userLocalStorage.firstName,
  //     email: userLocalStorage.email,
  //     profilePicture: userLocalStorage.profilePicture || "",
  //     isLogged: true,
  //     mongoId: userLocalStorage._id,
  //   };
  //   dispatch(signInAction(loggedUser));
  //   console.log("Logged user", loggedUser);
  // }, [loggedUserState]);

  // useEffect(() => {
  //   setLoggedUserState({
  //     email: "",
  //     firstName: "",
  //     isLogged: false,
  //     mongoId: "",
  //     profilePicture: "",
  //   });
  //   const userLocalStorage = loadLocalStorageItems("User state");

  //   if (userLocalStorage) {
  //     setLocalStorage(userLocalStorage, "User state");
  //   }
  // }, []);

  return (
    <>
      <RouterWrapper />
    </>
  );
}

export default App;
