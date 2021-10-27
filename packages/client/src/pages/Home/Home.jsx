import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import "./Home.scss";

import { PAGES } from "../../constants/routes";
import searchSchema from "./search-schema";
import { getAllUsers } from "../../api/user-api";
import { getAllTags } from "../../api/tag-api";
import { getAllMemes } from "../../api/meme-api";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import MemeList from "../../components/MemeList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [tagsList, setTagsList] = useState([]);
  const [memesList, setMemesList] = useState([]);

  const history = useHistory();

  // Initial loading
  const loadAllUsers = async () => {
    setIsLoading(true);
    try {
      const users = await getAllUsers();
      setUsersList(users.data.data);
    } catch (error) {
      return toast(error.message, { type: "error" });
    }
    setIsLoading(false);
  };

  const loadAllTags = async () => {
    setIsLoading(true);
    try {
      const tags = await getAllTags();
      setTagsList(tags.data.data);
    } catch (error) {
      return toast(error.message, { type: "error" });
    }
    setIsLoading(false);
  };

  const loadAllMemes = async () => {
    setIsLoading(true);
    try {
      const memes = await getAllMemes();
      setMemesList(memes.data.data);
    } catch (error) {
      return toast(error.message, { type: "error" });
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
        return toast(error.message, { type: "error" });
      }
    },
  });

  useEffect(() => {
    loadAllUsers();
    loadAllTags();
    loadAllMemes();
  }, []);

  return (
    <Layout>
      <PageTitle title="Home page" isHome />
      <div className="home-middle container-fluid px-5 row p-0 m-0">
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
        <div className="row p-0 m-0 col col-6 row p-0 m-0">
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
            {tagsList.map((tag) => (
              <div className="fnt-light" key={tag._id}>
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="page-bottom container-fluid p-0">
        <MemeList memes={memesList} />
      </div>
    </Layout>
  );
}
