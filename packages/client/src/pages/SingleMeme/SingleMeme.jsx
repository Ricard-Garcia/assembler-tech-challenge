import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { FaLink } from "react-icons/fa";

import { PAGES } from "../../constants/routes";

import { getMeme } from "../../api/meme-api";

import "./SingleMeme.scss";

import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import Button from "../../components/Button";

export default function SingleMeme() {
  const [isLoading, setIsLoading] = useState(true);
  const [meme, setMeme] = useState({});

  const { memeId } = useRouteMatch(`${PAGES.SINGLE_MEME}/:memeId`).params;

  const loadMeme = async () => {
    // setIsLoading(true);
    try {
      const meme = await getMeme(memeId);
      setMeme(meme.data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(meme.url);
  };

  useEffect(() => {
    loadMeme();
  }, []);

  return (
    <Layout>
      {!isLoading && (
        <>
          <PageTitle title="Meme overview" />
          <div className="container-fluid row mt-5 px-5">
            <div className="meme-left col col-6 ps-0">
              <img className="meme-image" src={meme.url} alt={meme.name} />
            </div>
            <div className="meme-right col col-6 pe-0">
              {/* Name */}
              <div className="mb-4">
                <p className="fnt-light fnt-label fnt-bold mb-2">Name</p>
                <p className="fnt-light fnt-text fnt-regular">{meme.name}</p>
              </div>
              {/* url */}
              <div className="mb-4">
                <div className="d-flex">
                  <p className="fnt-light fnt-label fnt-bold mb-2 me-2">url</p>
                  <button
                    className="link-button d-flex"
                    onClick={handleCopyUrl}
                  >
                    <FaLink />
                  </button>
                </div>
                <p className="fnt-light fnt-text fnt-regular">{meme.url}</p>
              </div>
              {/* Tag */}
              <div className="mb-4">
                <p className="fnt-light fnt-label fnt-bold mb-2">Tag</p>
                <p className="fnt-light fnt-text fnt-regular">
                  {meme.tagId.name}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
