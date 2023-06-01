import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border: none;
  border-radius: 3px;
  color: white;
  ${(props) => (props.color === "primary" ? `background: #2196f3;` : null)}
  ${(props) => (props.color === "success" ? `background: #4caf50;` : null)}
  ${(props) => (props.color === "danger" ? `background: #f44336;` : null)}
  ${(props) => (props.color === "warning" ? `background: #fdd835;` : null)}
`;

export default StyledButton;
