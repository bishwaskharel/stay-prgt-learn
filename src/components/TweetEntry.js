import React from "react";

const TweetEntry = ({ text, setText, tweets, setTweets }) => {
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const tweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, text]);
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
