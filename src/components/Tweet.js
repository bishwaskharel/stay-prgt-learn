import React from "react";

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const handleDelete = () => {
    console.log(tweet.id);
    setTweets(tweets.filter((t) => t.id !== tweet.id));
  };

  return (
    <div>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button>Like</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Tweet;
