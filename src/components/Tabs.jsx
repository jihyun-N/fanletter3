import { useDispatch, useSelector } from "react-redux";
import { setMember } from "store/modules/member";

import styled, { css } from "styled-components";

export default function Tabs() {
  // const { activeMember, setActiveMember } = useContext(MemberContext);
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const onActiveMember = (e) => {
    if (e.target === e.currentTarget) return;

    // setActiveMember(e.target.textContent);
    dispatch(setMember(e.target.textContent));
  };
  console.log("뭐야", onActiveMember);
  return (
    <TabsWrapper onClick={onActiveMember}>
      <Tab $activeMember={activeMember}>양희철 G</Tab>
      <Tab $activeMember={activeMember}>조진훈 Db</Tab>
      <Tab $activeMember={activeMember}>남지현 C</Tab>
      <Tab $activeMember={activeMember}>박강토 Eb</Tab>
      <Tab $activeMember={activeMember}>장지영 Bb</Tab>
      {/* 스타일컴포넌트 내부 특성이라 커멜케이스가 들어오면 달러 표시를 해야한다. */}
    </TabsWrapper>
  );
}

const TabsWrapper = styled.ul`
  background-color: #222094;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
`;

const Tab = styled.li`
  ${(props) => {
    if (props.$activeMember === props.children) {
      return css`
        background-color: pink;
        color: black;
      `;
    }
    return css`
      background-color: #fff7f1;
      color: #08a77f;
    `;
  }}

  font-size: 20px;
  width: 80px;
  text-align: center;
  padding: 12px 6px;
  border-radius: 12px;
  cursor: pointer;
  /* 커서 포인터 커서를 갖다대면 손가락 모양이 보인다. */
`;
