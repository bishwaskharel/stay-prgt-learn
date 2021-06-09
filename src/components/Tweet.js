import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const handleDelete = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweet}</h3>
      <button>Like</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Tweet;
