import styled from "styled-components";
import Form from "../Form";

export default function Popup(props) {
  // const [hasMounted, setHasMounted] = useState(false);
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }
  return props.trigger ? (
    <StyledPopup>
      <StyledPopupInner>
        <PopupInnerCloseButton onClick={() => props.setTrigger(false)}>
          x
        </PopupInnerCloseButton>
        <Form setTrigger={props.setTrigger} />
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const StyledPopupInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  background-color: #e1ddd3;
  padding: 20px;
  border-radius: 8px;s
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;

  @media (max-width: 20px) {
    padding: 16px;
    border-radius: 0;
    max-width: 100%;
    height: 100%;
  }
`;

const PopupInnerCloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  border: none;
  background-color: transparent;
  color: #999;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;
