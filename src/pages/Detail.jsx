import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "components/common/Avatar";
import { getFormatTimeDate } from "util/date";
import Button from "components/common/Button";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import { aditLetter, deleteLetter } from "store/modules/letters";

export default function Detail() {
  // const { letters, setLetters } = useContext(LetterContext);
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.letters);

  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { avatar, nickname, createdAt, name, content } = letters.find(
    (letter) => letter.id === id
  );

  const onDeleteBtn = () => {
    const answer = window.confirm("레알 삭제~~?");
    console.log("answer : ", answer);
    if (!answer) return;

    dispatch(deleteLetter(id));
    // const newLetters = letters.filter((letter) => letter.id !== id);
    // navigate("/");
    // // 삭제 버튼을 클릭하고 삭제된 후에는 홈화면으로
    // setLetters(newLetters);
    navigate("/");
  };
  const onEditDone = () => {
    if (!editingText) return alert("그대로여~");
    dispatch(aditLetter({ id, editingText }));
    // const newLetters = letters.map((latter) => {
    //   if (latter.id === id) {
    //     return { ...latter, content: editingText };
    //   }
    //   return latter;
    // });
    // setLetters(newLetters);
    setIsEditing(false);
    setEditingText("");
  };

  return (
    <Container>
      <Link to="/Home">
        <HomeBtn>
          <Button text="Home" />
        </HomeBtn>
      </Link>

      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickname>
            <Avatar src={avatar} size="large" />
            <Nickname>
              {name}
              {nickname}
            </Nickname>
          </AvatarAndNickname>
          <time>{getFormatTimeDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To : {name}</ToMember>
        {isEditing ? (
          <>
            <Textarea
              autoFocus
              defaultValue={content}
              onChange={(e) => setEditingText(e.target.value)}
            />
            {/* 오토포커스로 글귀 안에 포커스를 두고,  디폴트벨류로 원래 값이 입력되어있는 상태에서 수정 진행 */}
            <BtnsWrapper>
              <Button text="취소" onClick={() => setIsEditing(false)} />
              <Button text="수정완료" onClick={onEditDone} />
            </BtnsWrapper>
          </>
        ) : (
          <>
            <Content>{content}</Content>
            <BtnsWrapper>
              <Button text="수정" onClick={() => setIsEditing(true)} />
              <Button text="삭제" onClick={onDeleteBtn} />
            </BtnsWrapper>
          </>
        )}
      </DetailWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const DetailWrapper = styled.section`
  background-color: #0cccac;
  color: black;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AvatarAndNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Nickname = styled.span`
  font-size: 32px;
`;

const ToMember = styled.span`
  font-size: 24px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: #fff7f1;
  border-radius: 12px;
  height: 200px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Textarea = styled.textarea`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: #fff7f1;
  border-radius: 12px;
  height: 200px;
  color: black;
`;
