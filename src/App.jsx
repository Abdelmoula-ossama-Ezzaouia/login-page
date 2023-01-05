import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Input  from './components/Input';
import Button from './components/Button';
import Icon from './components/Icon';

function App() {

  const FacebookBackground =
  "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
const InstagramBackground =
  "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
const TwitterBackground =
  "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  return <Container>
    <Welcome>Welcome</Welcome>
    <InputContainer>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </InputContainer>
    <ButtonContainer>
      < Button content="Sign Up" />
    </ButtonContainer>
    <LoginWith>or Login With </LoginWith>
    <Horizontal />
    <IconsContainer>
      <Icon color={FacebookBackground}>
        <FaFacebookF />
      </Icon>
      <Icon color={InstagramBackground}>
        <FaInstagram />
      </Icon>
      <Icon color={TwitterBackground}>
        <FaTwitter />
      </Icon>
    </IconsContainer>
    <ForgotPassword>Forgot Password</ForgotPassword>
  </Container>

}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(25, 355, 55,0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;
const Welcome = styled.h2`
  margin: 3rem 0 2rem 0;
`;
const InputContainer = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  margin-bottom: 20px;
  margin-left: 70px;
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWith = styled.div`
  cursur: pointer;
`;
const Horizontal = styled.div`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  outline: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  backdrop-filter: blur(25px);
`;
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;
const ForgotPassword = styled.h4`
  cursor: pointer;
  color: white;
`;
export default App;