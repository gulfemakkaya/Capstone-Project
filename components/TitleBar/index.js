import styled from "styled-components";

export default function TitleBar() {
  return (
    <div>
      <H1Item>Planty</H1Item>
    </div>
  );
}
const H1Item = styled.h1`
  text-align: center;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: #c2d6c5;
  width 100%
  
  
`;

const StyledTitleBar = styled.div``;
