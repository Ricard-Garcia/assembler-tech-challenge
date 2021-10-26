import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import "./Home.scss";

import { PAGES } from "../../constants/routes";
import { getAllMemes } from "../../api/meme-api";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import MemeList from "../../components/MemeList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [memesList, setMemesList] = useState([]);

  const location = useLocation();

  const history = useHistory();

  const loadAllMemes = async () => {
    try {
      const memes = await getAllMemes();
      setMemesList(memes.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadAllMemes();
  }, []);

  useEffect(() => {
    console.log(memesList);
  }, [memesList]);

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
        {/* Searchbar */}
        <label className="fnt-label fnt-light mb-3" htmlFor="searchbar">
          Search
        </label>
        <input
          className="w-100 custom-searchbar fnt-light fnt-thin fx-border-radius p-4 mb-5 text-uppercase"
          name="searchbar"
          type="text"
        />
        {/* Users & tags */}
        <div className="users-tags-wrapper row p-0 m-0 col col-6 row p-0 m-0">
          <div className="col col-6">Users list</div>
          <div className="col col-6">Tags list</div>
        </div>
      </div>
      <div className="home-bottom container-fluid p-0">
        <MemeList memes={memesList} />
      </div>
    </Layout>
  );
}
