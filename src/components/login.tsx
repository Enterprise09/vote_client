import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState([]);
  const [number, setNubmer] = useState([]);
  const [age, setAge] = useState([]);
  const inputs = [
    { className: "inputName", type: "text", placeholder: "이 름" },
    { className: "inputNumber", type: "number", placeholder: "동명번호" },
    { className: "inputAge", type: "number", placeholder: "나 이" },
  ];
  const navigate = useNavigate();

  const onChange = (event: any) => {
    const {
      target: { className, value },
    } = event;
    console.log(className);

    switch (className) {
      case "inputName":
        setName(value);
        break;
      case "inputNumber":
        setNubmer(value);
        break;
      case "inputAge":
        setAge(value);
        break;
      default:
        alert("올바르지 않은 접근입니다.");
        break;
    }
  };

  const onSubmit = (event: any) => {
    /* send request to server with input data - use axios module */
    navigate("/vote");
  };

  return (
    <div className="container">
      <h1 className="login-title title">로 그 인</h1>
      <form className="login-form">
        {inputs.map((i, index) => (
          <input
            key={index}
            className={i.className}
            onChange={onChange}
            type={i.type}
            placeholder={i.placeholder}
          />
        ))}
      </form>
      <button className="button login-button red-button" onClick={onSubmit}>
        로 그 인
      </button>
    </div>
  );
};

export default Login;
