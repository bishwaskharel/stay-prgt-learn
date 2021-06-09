import React from "react";
import Tweet from "./Tweet";
const TweetList = ({ author, tweets }) => {
  return (
    <div>
      <Tweet name={author} tweets={tweets} />
      <Tweet name={author} tweets={tweets} />
      <Tweet name={author} tweets={tweets} />
    </div>
  );
};

export default TweetList;
