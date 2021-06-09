import React from "react";
import Tweet from "./Tweet";
const TweetList = ({ author, tweets, setTweets }) => {
  return (
    <div>
      {/* <Tweet name={author} tweets={tweets} /> */}
      {tweets.map((tweet) => (
        <Tweet
          name={author}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
        />
      ))}
    </div>
  );
};

export default TweetList;
