import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { PAGES } from "../../constants/routes";
import { getAllMemes } from "../../api/meme-api";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import MemeList from "../../components/MemeList";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [foundUsers, setFoundUsers] = useState([]);
  const [foundNameMemes, setFoundNameMemes] = useState([]);
  const [foundTagMemes, setFoundTagMemes] = useState([]);

  const location = useLocation();

  const history = useHistory();

  return (
    <Layout>
      <div className="home-top w-100 px-5 d-flex justify-content-between align-items-center">
        <h1 className="fnt-light fnt-thin m-0 text-uppercase container-fluid ">
          Found items{" "}
        </h1>
        <Button isBackButton isDark>
          Back
        </Button>{" "}
      </div>
      {/* Found users */}
      <div className="home-bottom container-fluid p-0">
        Found users
        {/* <MemeList memes={memesList} /> */}
      </div>
      {/* Found memes by name */}
      <div className="home-bottom container-fluid p-0">
        Found memes by name
        {/* <MemeList memes={memesList} /> */}
      </div>
      {/* Found memes by tag */}
      <div className="home-bottom container-fluid p-0">
        Found memes by tag
        {/* <MemeList memes={memesList} /> */}
      </div>
    </Layout>
  );
}
