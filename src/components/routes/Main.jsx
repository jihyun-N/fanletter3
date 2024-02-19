import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div>Main</div>
      <Link to="/home">
        <button>일단 가자</button>
      </Link>
    </>
  );
}
