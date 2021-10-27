import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { searchUsers, searchMemes, searchTags } from "../../api/search-api";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";
import MemeList from "../../components/MemeList";

export default function Search() {
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
    }
  };

  // Memes
  const loadFoundMemes = async () => {
    try {
      const { data } = await searchMemes(searchQuery);
      setFoundMemes(data.memes);
    } catch (error) {
      console.log(error);
    }
  };

  // Tags
  const loadFoundTags = async () => {
    try {
      const { data } = await searchTags(searchQuery);
      setFoundTags(data.tags);
    } catch (error) {
      console.log(error);
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
      <PageTitle title="Found items with:&nbsp;" subtitle={searchQuery} />
      <div className="page-bottom container-fluid p-0">
        {/* Found users */}
        <div className="found-wrapper">
          <p className="fnt-label fnt-light px-5">Found users</p>
          {foundUsers.map((user) => (
            <div className="fnt-light" key={user._id}>
              {user.firstName}
            </div>
          ))}
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
