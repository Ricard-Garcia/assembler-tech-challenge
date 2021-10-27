import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";

import "./Home.scss";

import { PAGES } from "../../constants/routes";
import searchSchema from "./search-schema";
import { getAllUsers } from "../../api/user-api";
import { getAllMemes } from "../../api/meme-api";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import MemeList from "../../components/MemeList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [memesList, setMemesList] = useState([]);

  const location = useLocation();

  const history = useHistory();

  // Initial loading
  const loadAllMemes = async () => {
    setIsLoading(true);
    try {
      const memes = await getAllMemes();
      setMemesList(memes.data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const loadAllUsers = async () => {
    setIsLoading(true);
    try {
      const users = await getAllUsers();
      setUsersList(users.data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // Searchbar
  const formik = useFormik({
    initialValues: {
      searchbar: "",
    },
    validationSchema: searchSchema,
    onSubmit: async (searchState) => {
      setIsLoading(true);
      try {
        if (searchState.searchbar !== "") {
          history.push(`${PAGES.SEARCH}?q=${searchState.searchbar}`);
        }
      } catch (error) {
        console.log("Couldn't sign in: ", error);
      }
    },
  });

  useEffect(() => {
    loadAllUsers();
    loadAllMemes();
  }, []);

  return (
    <Layout>
      <div className="home-top w-100 px-5 d-flex justify-content-between align-items-center">
        <h1 className="fnt-light fnt-thin m-0 text-uppercase">
          Memerize home page
        </h1>
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
      </div>
      <div className="mt-5 home-middle container-fluid px-5 row p-0 m-0">
        <form className="px-0" onSubmit={formik.handleSubmit}>
          {/* Searchbar */}
          <label className="fnt-label fnt-light mb-3" htmlFor="searchbar">
            Search
          </label>
          <input
            className="w-100 custom-searchbar fnt-light fnt-thin fx-border-radius p-4 mb-5 text-uppercase"
            name="searchbar"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.searchbar}
            disabled={isLoading}
          />
        </form>
        {/* Users & tags */}
        <div className="users-tags-wrapper row p-0 m-0 col col-6 row p-0 m-0">
          <div className="col col-6 p-0">
            <p className="fnt-label fnt-light">Users list</p>
            {usersList.map((user) => (
              <div className="fnt-light" key={user._id}>
                {user.firstName}
              </div>
            ))}
          </div>
          <div className="col col-6 p-0">
            <p className="fnt-label fnt-light">Tags list</p>
          </div>
        </div>
      </div>
      <div className="home-bottom container-fluid p-0">
        <MemeList memes={memesList} />
      </div>
    </Layout>
  );
}
