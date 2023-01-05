import styled from "styled-components"

function Button({ content }) {
  return  <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.div`
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`;
export default Button