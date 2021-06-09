import React from "react";

const Tweet = ({ name, tweet }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweet}</h3>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
};

export default Tweet;
