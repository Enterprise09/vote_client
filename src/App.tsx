import Admin from "./components/admin";
import Login from "./components/login";
import VoteForm from "./components/vote_form";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";
import React from "react";

function App() {
  const data = {
    title: "연합회장",
    sub_title: "7",
  };

  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/vote"
        element={<VoteForm title={data.title} sub_title={data.sub_title} />}
      ></Route>
    </Routes>
  );
}

export default App;
