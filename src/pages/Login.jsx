import React, { useState } from "react";
import styled from "styled-components";
import api from "../axios/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "store/modules/authSlice";

export default function Login() {
  // 1 = 로그인, 0 = 회원가입
  const [pageState, setPageState] = useState(true);
  const togglePage = () => {
    setPageState(!pageState);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickName, setNickName] = useState("");

  const joinUser = async (e) => {
    e.preventDefault();
    const newRegister = {
      id,
      password,
      nickName,
    };
    try {
      const { data } = await api.post("/register", newRegister);
      setPageState(!pageState);
      console.log(data);
    } catch (error) {
      alert(error.response.message);
      return false;
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", { id, password });
      console.log("로그인 응답값 확인해보자구");
      console.log(data);
      const { accessToken, userId, success, avatar, nickname } = Response.data;
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("userId", JSON.stringify(userId));
      localStorage.setItem("avatar", JSON.stringify(avatar));
      localStorage.setItem("nickname", JSON.stringify(nickname));
      dispatch(
        login({
          accessToken,
          userId,
          success,
          avatar,
          nickname,
        })
      );
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
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
          />
          <input
            type="password"
            placeholder="비밀번호(4~15글자)"
            minLength={4}
            maxLength={15}
            required
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
          />
          <input
            type="text"
            placeholder="닉네임(1~10글자)"
            minLength={1}
            maxLength={10}
            required
            onChange={(e) => {
              setNickName(e.target.value);
            }}
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
