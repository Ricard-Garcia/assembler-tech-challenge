import React, { useState } from "react";

import MemeCard from "../MemeCard";

export default function MemeList({ title, memes = [] }) {
  const [listOfMemes, setListOfMemes] = useState(memes);

  return (
    <div className="container-fluid p-0">
      {title && <div className="fnt-title fnt-light px-5">{title}</div>}

      <div className="row m-0 p-0 g-4 memes-wrapper">
        {listOfMemes.map((meme, index) => (
          <MemeCard
            key={`meme-${index}`}
            // memeId={meme._id}
            // memeUrl={meme.url}
            // userId={meme.userId}
            cols="4"
          />
        ))}
      </div>
    </div>
  );
}
