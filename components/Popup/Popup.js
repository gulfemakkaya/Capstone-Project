import styled from "styled-components";
import Form from "../Form";
export default function Popup(props) {
  return props.trigger ? (
    <StyledPopup>
      <StyledPopupInner>
        <Form />
        <PopupInnerCloseButton onClick={() => props.setTrigger(false)}>
          close
        </PopupInnerCloseButton>
        {props.children}
      </StyledPopupInner>
    </StyledPopup>
  ) : (
    ""
  );
}

const StyledPopup = styled.div`
  position: fixed;
  display: flex;
  top: 50%;
  left: 50%;
  width: 50%;
  heigth: 200px;
  background-color: green;
  justify-content: center;
  align-items: center;
  z-index: 200;
  border: 2px solid grey;
`;

const StyledPopupInner = styled.div`
  position: relative;
  padding: 30px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
`;
const PopupInnerCloseButton = styled.button`
  position: absolute;
  top: 16 px;
  right: px;
`;
