import styled, { css } from "styled-components";
import code from "assets/code.jpg";

export default function Avatar({ src, size }) {
  return (
    <AvatarFigure size={size}>
      <img src={src ?? code} alt="아바타이미지" />
    </AvatarFigure>
  );
}

const AvatarFigure = styled.figure`
  ${(props) => {
    switch (props.size) {
      case "large":
        return css`
          width: 75px;
          height: 75px;
        `;
      default:
        return css`
          width: 50px;
          height: 50px;
        `;
    }
  }}
  border-radius: 50%;
  /* 이렇게 3개의 스타일을 주면 동그랗게 만들 수 있음 */
  overflow: hidden;
  /* 오버플로우 히든은 삐져나오는 이미지를 가릴 수 있는 스타일 */
  & img {
    /* 피겨태그 안에 있는 이미지 태그는 이렇게 스타일을 넣을 수 있음 */
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 모든 이미지 크기가 피겨태그의 크기만큼 꽉차게 만들 수 있음 */
    border-radius: 50%;
  }
`;
