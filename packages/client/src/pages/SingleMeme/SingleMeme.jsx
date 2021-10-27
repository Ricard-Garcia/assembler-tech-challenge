import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { FaLink } from "react-icons/fa";

import { PAGES } from "../../constants/routes";

import { getMeme } from "../../api/meme-api";

import "./SingleMeme.scss";

import Layout from "../../components/Layout";
import Button from "../../components/Button";

export default function SingleMeme() {
  const [isLoading, setIsLoading] = useState(true);
  const [meme, setMeme] = useState({});

  const { memeId } = useRouteMatch(`${PAGES.SINGLE_MEME}/:memeId`).params;
  //   const location = useLocation();
  //   const history = useHistory();

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
          <div className="d-flex justify-content-between align-items-center mb-5 px-5 w-100">
            <h1 className="fnt-light fnt-thin m-0 text-uppercase container-fluid ">
              Meme overview
            </h1>
            <Button isBackButton isDark>
              Back
            </Button>
          </div>

          <div className="row container-fluid px-5">
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
                <p className="fnt-light fnt-label fnt-bold mb-2">url</p>
                <p className="fnt-light fnt-text fnt-regular">{meme.url}</p>
                <Button handleClick={handleCopyUrl}>
                  <FaLink />
                </Button>
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
