import React from "react";

import MemeList from "../MemeList";

export default function FoundWrapper({ title, users = false, memes = false }) {
  return (
    <div className="found-wrapper mb-5">
      <p className="fnt-label fnt-light px-5">{title}</p>
      {/* Render memes */}
      {memes.length > 0 ? (
        memes && <MemeList memes={memes} />
      ) : (
        <div className="fnt-thin fnt-label fnt-regular px-5">Nothing found</div>
      )}
      {/* Render users */}
      {users && (
        <div className="px-5 d-flex">
          {users.map((user) => (
            <div className="fnt-label fnt-regular" key={user._id}>
              {user.firstName}&nbsp; &nbsp;
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
