import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { PAGES } from "../../constants/routes";
import { getAllMemes } from "../../api/meme-api";
import { searchUsers, searchMemes, searchTags } from "../../api/search-api";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import MemeList from "../../components/MemeList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [foundUsers, setFoundUsers] = useState([]);
  const [foundMemes, setFoundMemes] = useState([]);
  const [foundTags, setFoundTags] = useState([]);

  const searchQuery = new URLSearchParams(useLocation().search).get("q");

  // Users
  const loadFoundUsers = async () => {
    try {
      const { data } = await searchUsers(searchQuery);
      setFoundUsers(data.users);
    } catch (error) {
      console.log(error);
      //  setFoundTracks({ ...foundTracks, loaded: true });
    }
  };

  // Memes
  const loadFoundMemes = async () => {
    try {
      const { data } = await searchMemes(searchQuery);
      setFoundMemes(data.memes);
    } catch (error) {
      console.log(error);
      //  setFoundTracks({ ...foundTracks, loaded: true });
    }
  };

  // Tags
  const loadFoundTags = async () => {
    try {
      const { data } = await searchTags(searchQuery);
      setFoundTags(data.tags);
    } catch (error) {
      console.log(error);
      //  setFoundTracks({ ...foundTracks, loaded: true });
    }
  };

  //  General search
  const generalSearch = () => {
    loadFoundUsers();
    loadFoundMemes();
    loadFoundTags();
  };

  useEffect(() => {
    // Load all searches
    generalSearch();
  }, []);

  return (
    <Layout>
      <div className="home-top w-100 px-5 d-flex justify-content-between align-items-center">
        <h1 className="fnt-light fnt-thin m-0 text-uppercase container-fluid ">
          Found items with:&nbsp;
          <p className="fnt-bold d-inline-block"> {searchQuery}</p>
        </h1>
        <Button isBackButton isDark>
          Back
        </Button>
      </div>
      <div className="home-bottom container-fluid p-0">
        {/* Found users */}
        <div className="found-wrapper">
          <p className="fnt-label fnt-light px-5">Found users</p>
          {/* <MemeList memes={memesList} /> */}
        </div>
        {/* Found memes by name */}
        <div className="found-wrapper">
          <p className="fnt-label fnt-light px-5">Found memes by name</p>
          <MemeList memes={foundMemes} />
        </div>
        {/* Found memes by tag */}
        <div className="found-wrapper">
          <p className="fnt-label fnt-light px-5">Found memes by tag</p>
          <MemeList memes={foundTags} />
        </div>
      </div>
    </Layout>
  );
}
