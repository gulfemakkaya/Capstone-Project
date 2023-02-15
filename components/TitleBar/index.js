import styled from "styled-components";

export default function TitleBar() {
  return (
    <StyledTitleBar>
      <H1Item>PLANTY</H1Item>
    </StyledTitleBar>
  );
}

const StyledTitleBar = styled.div`

text-align: center;
position: fixed;
left: 50%;
transform: translateX(-50%);
z-index: 100;
background-color: #c2d6c5;
width 100%;
border-radius: 50px;
border: 2px #a27150 solid;
`;

const H1Item = styled.h1`
  font-family: slabo;
`;
