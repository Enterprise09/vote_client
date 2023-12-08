import React from "react";
import "../css/admin.css";

const Admin = () => {
  const column = ["구분", "순위", "이름", "득표"];
  return (
    <div className="admin-container">
      <h1>관리자 페이지</h1>
      <button className="button blue-button">다음투표</button>
      <button className="button red-button">결과집계</button>

      <table border={1}>
        <tr>
          {column.map((c) => (
            <th>{c}</th>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Admin;
