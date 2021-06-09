import React from "react";
import { v4 as uuidv4 } from "uuid";

const TweetEntry = ({ text, setText, tweets, setTweets }) => {
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const tweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: text, id: uuidv4() }]);
    setText("");
  };

  return (
    <form onSubmit={tweetHandler}>
      <textarea
        value={text}
        onChange={textHandler}
        cols="30"
        rows="4"
      ></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetEntry;
