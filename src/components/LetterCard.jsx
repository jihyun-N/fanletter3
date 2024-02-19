import styled from "styled-components";
import Avatar from "./common/Avatar";
import { getFormatTimeDate } from "util/date";
import { useNavigate } from "react-router-dom";

export default function LetterCard({ letter }) {
  const navigate = useNavigate();

  return (
    <LetterWrapper onClick={() => navigate(`/detail/${letter.id}`)}>
      <UserInfo>
        <Avatar src={letter.avatar} />
        <NicknameAndData>
          <p>
            {letter.name}
            {letter.nickname}
          </p>
          <time>{getFormatTimeDate(letter.createdAt)}</time>
        </NicknameAndData>
      </UserInfo>
      <Content>{letter.content}</Content>
    </LetterWrapper>
  );
}

const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: black;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.1s;
  /* 밑에 호버가 나타나는 시간 */
  &:hover {
    transform: scale(1.02);
  }
  /* 호버는 커서를 갖다 대면 (2%만) 커지는 기능  */
`;
const UserInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const NicknameAndData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Content = styled.p`
  background-color: #fff7f1;
  border-radius: 12px;
  padding: 12px;
  margin-left: 62px;
  white-space: nowrap;
  /* nowrap 줄바꿈을 하지 않겠다. */
  /* normal에 경우 줄 바꿈 */
  overflow: hidden;
  text-overflow: ellipsis; // 생략부호(...)
  /* 칸에 초과되는 글자수에 경우 ...으로 표시된다. */
`;
