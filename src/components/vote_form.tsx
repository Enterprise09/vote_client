import React from "react";
import { useState } from "react";

interface voteInfo {
  title: string;
  sub_title: string;
}

const VoteForm = (data: voteInfo) => {
  const [name, setName] = useState([]);

  const onChange = (event: any) => {
    const {
      target: { className, value },
    } = event;
    if (className == "vote-name-input") {
      setName(value);
    } else {
      alert("올바르지 않은 접근입니다.");
    }
  };

  const onSubmit = () => {
    // send name to server - use axios module
    alert("투표에 성공하였습니다.");
  };

  const onNextVoteClick = () => {
    // send next vote signal to server
  };

  return (
    <div className="container">
      <h1 className="vote-title ">{data.title}</h1>
      <h2 className="vote-sub-title">{data.sub_title}차 투표</h2>
      <form className="vote-form">
        <input className="vote-name-input" type="text" placeholder="이 름" />
      </form>
      <button className="button red-button vote-button" onClick={onSubmit}>
        투표하기
      </button>
      <button
        className="button blue-button next-vote-button"
        onClick={onNextVoteClick}
      >
        다음투표
      </button>

      {/* youtube live video */}
      <iframe
        src="https://www.youtube.com/embed/Lk4e1mk4lJU?si=NNvMw5uF9jfdIClA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VoteForm;
