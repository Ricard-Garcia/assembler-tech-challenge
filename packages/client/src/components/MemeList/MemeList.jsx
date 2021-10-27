import React from "react";

import MemeCard from "../MemeCard";

export default function MemeList({ title, memes = [] }) {
  return (
    <div className="container-fluid p-0">
      {title && <div className="fnt-title fnt-light px-5">{title}</div>}

      <div className="row m-0 p-0 memes-wrapper">
        {memes.map((meme) => (
          <MemeCard
            key={meme._id}
            memeId={meme._id}
            memeName={meme.name}
            memeUrl={meme.url}
            cols="4"
          />
        ))}
      </div>
    </div>
  );
}
