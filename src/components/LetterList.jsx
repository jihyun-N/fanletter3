import LetterCard from "./LetterCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function LetterList() {
  // const { activeMember } = useContext(MemberContext);
  // const { letters } = useContext(LetterContext);
  const activeMember = useSelector((state) => state.member);
  const letters = useSelector((state) => state.letters);
  const filteredLetters = letters.filter(
    (letter) => letter.name === activeMember
  );

  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>{activeMember} 팬레터좀 써조~ 힝</p>
      ) : (
        filteredLetters.map((letter) => <LetterCard letter={letter} />)
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  background-color: #0cccac;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  padding: 12px;
  width: 500px;
  color: black;
`;
