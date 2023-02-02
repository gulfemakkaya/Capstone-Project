import styled from "styled-components";

export default function TitleBar() {
  return <H1Item>Planty</H1Item>;
}
const H1Item = styled.h1`
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;
