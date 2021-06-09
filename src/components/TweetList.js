import React from "react";
import Tweet from "./Tweet";
const TweetList = ({ author, message, setName }) => {
  return (
    <div>
      <Tweet name={author} tweet={message} />
      <Tweet name={author} tweet={message} />
      <Tweet name={author} tweet={message} />
      <Tweet name={author} tweet={message} />
      <button type="button" onClick={() => setName("Hello MF")} >Chnage Name</button>
    </div>
  );
};

export default TweetList;
