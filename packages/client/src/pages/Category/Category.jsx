import React, { useState, useEffect } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";

import { getTaggedMemes } from "../../api/meme-api";

import { PAGES } from "../../constants/routes";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
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
      <PageTitle title="Category&nbsp;" subtitle={tagName} />

      <div className="page-bottom container-fluid p-0">
        {/* Found memes by tag */}
        <div className="found-wrapper">
          <MemeList memes={taggedMemes} />
        </div>
      </div>
    </Layout>
  );
}
