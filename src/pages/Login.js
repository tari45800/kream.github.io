import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyles';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';


const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff
`
function Login() {
  return(
    <MainDiv>
      <GlobalStyle></GlobalStyle>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </MainDiv>
  )
}

export default Login;
