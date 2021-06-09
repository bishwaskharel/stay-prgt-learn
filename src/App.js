import React, { useState } from "react";
import "./App.css";
import TweetEntry from "./components/TweetEntry";
import TweetList from "./components/TweetList";
function App() {
  const name = "Bullshit";
  const [text, setText] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <h1>Post Man Updates</h1>
      <TweetEntry
        text={text}
        setText={setText}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList author={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
