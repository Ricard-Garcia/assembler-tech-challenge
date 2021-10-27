import React, { useState, useEffect } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";

import { getTaggedMemes } from "../../api/meme-api";

import { PAGES } from "../../constants/routes";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import MemeList from "../../components/MemeList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [taggedMemes, setTaggedMemes] = useState([]);

  const { tagName } = useRouteMatch(`${PAGES.CATEGORY}/:tagName`).params;

  const location = useLocation();

  // Memes
  const loadFoundMemes = async () => {
    try {
      const { data } = await getTaggedMemes(tagName);
      setTaggedMemes(data.memes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Load all searches
    loadFoundMemes();
  }, []);

  useEffect(() => {
    // Load all searches
    loadFoundMemes();
  }, [location.pathname]);

  return (
    <Layout>
      <div className="home-top w-100 px-5 d-flex justify-content-between align-items-center">
        <h1 className="fnt-light fnt-thin m-0 text-uppercase container-fluid ">
          Category:&nbsp;
          <p className="fnt-bold d-inline-block"> {tagName}</p>
        </h1>
        <Button isBackButton isDark>
          Back
        </Button>
      </div>
      <div className="home-bottom container-fluid p-0">
        {/* Found memes by tag */}
        <div className="found-wrapper">
          <MemeList memes={taggedMemes} />
        </div>
      </div>
    </Layout>
  );
}
