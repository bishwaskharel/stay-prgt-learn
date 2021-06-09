import React from "react";

const Tweet = ({ name, tweets }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweets}</h3>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
};

export default Tweet;
