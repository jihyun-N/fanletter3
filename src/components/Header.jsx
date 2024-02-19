import Tabs from "./Tabs";
import styled from "styled-components";
import avoid from "assets/Avoid.png";
export default function Header() {
  return (
    <Container>
      <Title>Avoid 팬레터</Title>
      <Tabs />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-image: url(${avoid});
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;
