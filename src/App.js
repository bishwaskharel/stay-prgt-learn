import React, { useState } from "react";
import "./App.css";
import TweetEntry from "./components/TweetEntry";
import TweetList from "./components/TweetList";
function App() {
  const [name, setName] = useState("Author Man");
  const tweet =
    "Message with updates in github have been always better with the flow going, We can also limit the words in thi message and get the flex box always in proper manner  ";
  return (
    <div className="App">
      <h1>Post Man Updates</h1>
      <TweetEntry />
      <TweetList author={name} message={tweet} setName={setName} />
    </div>
  );
}

export default App;
