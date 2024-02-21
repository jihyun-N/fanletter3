import React, { useState } from "react";
import styled from "styled-components";
import api from "../axios/api";

export default function Login() {
  // 1 = 로그인, 0 = 회원가입
  const [pageState, setPageState] = useState(true);
  const togglePage = () => {
    setPageState(!pageState);
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const joinUser = async (e) => {
    e.preventDefault();
    const joinInfo = {
      id,
      password,
      nickname,
    };
    const { data } = await api.post("/register", joinInfo);
    console.log(data);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const loginInfo = {
      id,
      password,
    };
    const { data } = await api.post("/login", loginInfo);
    console.log("로그인 응답값 확인해보자구");
    console.log(data);
    localStorage.setItem("token", data.accessToken);
  };
  return (
    <div>
      {pageState ? (
        <Wrapper>
          로그인
          <input
            type="text"
            placeholder="아이디(4~10글자)"
            minLength={4}
            maxLength={10}
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
          <input
            type="password"
            placeholder="비밀번호(4~15글자)"
            minLength={4}
            maxLength={15}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <Button onClick={loginUser}>로그인</Button>
          <Button onClick={togglePage}>회원가입</Button>
        </Wrapper>
      ) : (
        <Wrapper>
          회원가입
          <input
            type="text"
            placeholder="아이디(4~10글자)"
            minLength={4}
            maxLength={10}
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
          <input
            type="password"
            placeholder="비밀번호(4~15글자)"
            minLength={4}
            maxLength={15}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <input
            type="text"
            placeholder="닉네임(1~10글자)"
            minLength={1}
            maxLength={10}
            required
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            value={nickname}
          />
          <Button onClick={joinUser} type="submit">
            회원가입
          </Button>
          <Button onClick={togglePage}>로그인</Button>
        </Wrapper>
      )}
    </div>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border-radius: 12px;
  background-color: white;
  width: 500px;
`;

const Button = styled.button`
  cursor: pointer;
`;
