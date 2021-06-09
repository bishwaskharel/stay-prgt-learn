import React, { useState } from "react";

const TweetEntry = () => {
  const [msg, setMsg] = useState("");

  const buttonHandler = (e) => {
    console.log("Hello Bitch");
    setMsg("Hello");
  };

  const [text, setText] = useState("");

  const textHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <form>
      <textarea
        value={text}
        onChange={textHandler}
        cols="30"
        rows="4"
      ></textarea>
      <button type="button" onClick={buttonHandler}>
        Tweet
      </button>
      <button type="button" onClick={() => setText("")}>
        Reset
      </button>
      <h2>{text}</h2>
      <h1>{msg}</h1>
    </form>
  );
};

export default TweetEntry;
