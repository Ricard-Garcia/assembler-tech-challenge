import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { searchUsers, searchMemes, searchTags } from "../../api/search-api";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import FoundWrapper from "../../components/FoundWrapper";

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [foundUsers, setFoundUsers] = useState([]);
  const [foundMemes, setFoundMemes] = useState([]);
  const [foundTags, setFoundTags] = useState([]);

  const searchQuery = new URLSearchParams(useLocation().search).get("q");

  // Users
  const loadFoundUsers = async () => {
    try {
      setIsLoading(true);
      const { data } = await searchUsers(searchQuery);
      setFoundUsers(data.users);
    } catch (error) {
      return toast(error.message, { type: "error" });
    }
    setIsLoading(false);
  };

  // Memes
  const loadFoundMemes = async () => {
    try {
      setIsLoading(true);
      const { data } = await searchMemes(searchQuery);
      setFoundMemes(data.memes);
    } catch (error) {
      return toast(error.message, { type: "error" });
    }
    setIsLoading(false);
  };

  // Tags
  const loadFoundTags = async () => {
    try {
      setIsLoading(true);
      const { data } = await searchTags(searchQuery);
      setFoundTags(data.tags);
    } catch (error) {
      return toast(error.message, { type: "error" });
    }
    setIsLoading(false);
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
        <FoundWrapper title="Found users" users={foundUsers} />
        {/* Found memes by name */}
        <FoundWrapper title="Found memes by name" memes={foundMemes} />
        {/* Found memes by tag */}
        <FoundWrapper title="Found memes by tag" memes={foundTags} />
      </div>
    </Layout>
  );
}
