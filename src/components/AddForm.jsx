import { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import Button from "./common/Button";
import { useDispatch } from "react-redux";
import { addLetter } from "store/modules/letters";

export default function AddForm() {
  // const { setLetters } = useContext(LetterContext);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("양희철 G");

  const onAddLetter = (e) => {
    e.preventDefault();
    if (!nickname || !content) return alert("닉네임 내용 필수~");

    const newLetter = {
      createdAt: new Date(),
      avatar: null,
      name: member,
      id: uuid(),
      nickname,
      content,
    };

    dispatch(addLetter(newLetter));
    // setLetters((prev) => [newLetter, ...prev]);
    setNickname("");
    setContent("");
  };
  return (
    <Form onSubmit={onAddLetter}>
      <InputWrapper>
        <label>닉네임</label>
        <input
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
          placeholder="20글자 넘으면 안돼~"
          maxLength={20}
        />
      </InputWrapper>
      <InputWrapper>
        <label>내용</label>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder="100자 까지만 써줘~"
          maxLength={100}
        />
      </InputWrapper>

      <SelectWrapper>
        <label>누구에게 보내실 건가요?</label>
        <select onChange={(e) => setMember(e.target.value)}>
          <option>양희철 G</option>
          <option>조진훈 Db</option>
          <option>남지현 C</option>
          <option>박강토 Eb</option>
          <option>장지영 Bb</option>
        </select>
      </SelectWrapper>
      <Button text="팬레터 등록" />
    </Form>
  );
}

const Form = styled.form`
  background-color: #1d28c0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 500px;
  border-radius: 12px;
  margin: 20px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & label {
    width: 80px;
  }
  & input,
  textarea {
    width: 100%;
    padding: 12px;
  }
  & textarea {
    resize: none;
  }
`;

const SelectWrapper = styled(InputWrapper)`
  justify-content: start;
  & label {
    width: 190px;
  }
`;
