import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin } from '../actions';

const LoginFormDiv = styled.div`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  margin-bottom: 155px;

  & .loginForm{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 550px;
    text-align: center;
  }

  & .loginHeader{
    margin-top: 20px;
    font-family: 'SBAggroB';
    font-size: 10px;

    & h1 {
      font-size: 29px;
      font-weight: 300;
      font-style: italic;
      letter-spacing: 1px;
    }
  }

  & .loginInput {
    margin: 30px 0;
    margin-top: 45px;

    & div{
      position: relative;
      margin-bottom: 5px;
    }

    & span{
      position: absolute;
      top: 22px;
      left: 0;
      font-size: 13px;  
      font-weight: bold;
    }

    & input{
      margin-top: 38px;
      width: 400px;
      height: 40px;
      border: none;
      border-bottom: 1px solid rgb(230, 230, 230);
      font-size: 15px;  
      outline: none;
      letter-spacing: 1px;
    }

    input::placeholder {
      color: rgb(200, 200, 200);
      font-size: 13px;  
    }

    ${props => {
      if(props.props.emailValue.input !== '' && props.props.emailValue.red ){
        return`
        & div:nth-of-type(1) {
          & input{
            border-bottom: 1px solid crimson;
          }
          & span{
            color: crimson;
          }
        }

        & div{
          &:nth-of-type(1):after{
            content:'이메일 주소를 정확히 입력해주세요.';
            position: absolute;
            top: 100%;
            left: 0;
            font-size: 11px;  
            color: crimson;
          }
        }

        `
      } 
      }
    }

    ${props => {
      if(props.props.passwdValue.input !== '' && props.props.passwdValue.red ){
        return`
        & div:nth-of-type(2) {
          & input{
            border-bottom: 1px solid crimson;
          }
          & span{
            color: crimson;
          }
        }

        & div{
          &:nth-of-type(2):after{
            content:'영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)';
            position: absolute;
            top: 100%;
            left: 0;
            font-size: 11px;  
            color: crimson;
          }
        }

        `
      }
      }
    }
  }

  & .Link {
    width: 100%;
  }

  & button {
    margin: 4px 0;
    width: 100%;
    height: 52px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 12px;
    background-color: white;
    font-size: 16px;
    font-weight: bold;
  }


  & .btn{
    color: white;
    background-color: ${props => props.btnColor ? 'black' : 'rgb(235, 235, 235)'};
  }

  & .loginEmail{
    margin: 16px 0;
    margin-bottom: 35px;
    width: 330px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    & span:nth-of-type(2), span:nth-of-type(4){
      color: rgb(200, 200, 200);
    }
  }

  @media (max-width: 750px){
    input{
      width:100%;
    }
  }

`

function LoginForm() {

  // 전역 상태관리 state
  const loginState = useSelector(state => state.itemReducer);
  const loginDispatch = useDispatch();

  // 복잡한 스테이트 관리를 위해 리듀서 사용
  // 아이디와 비밀번호 객체 생성
  const [state, dispatch] = useReducer(reducer, {
    'emailValue' : 
      {           
        'input' : '',
        'red' : true,
      },
    'passwdValue' : 
      {    
        'input' : '',
        'red' : true,
      },
  })


  // 리듀서로 이벤트 객체를 전달해주는 함수
  const inputControler = (e) => {
    dispatch(e.target)
  }


  // 컨트롤러로 부터 이벤트 객체를 받아와 처리하는 함수
  function reducer(state, action){

    // 정규표현식  
    let regex = null;

    if(action.name === 'emailValue'){
      regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    } else {
      regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/g;
    }

    if(regex.test(action.value)){
      return {
        ...state,
        [action.name] : {
          'red' : false,
          'input' : action.value
        }
      }
    } else if(!regex.test(action.value)){
      return {
        ...state,
        [action.name] : {
          'red' : true,
          'input' : action.value
        }
      }
    }
  }

  // 로그인 버튼 관리 스테이트
  const [btnColor, setColor] = useState(false) 

  // 알맞는 로그인 시도일 때 버튼 활성화 함수
  useEffect(() => {
    if(!state.emailValue.red && !state.passwdValue.red){
      setBtn(<Link className='Link' to='/'><button className='btn' onClick={()=>{loginDispatch(isLogin())}}>로그인</button></Link>)
      setColor(true)
    }
  }, [state])

  //로그인 버튼
  const [loginBtn, setBtn] = useState(<button className='btn'>로그인</button>)

  return(
    <LoginFormDiv props={state} btnColor={btnColor}>
      <div className='loginForm'>

        <div className='loginHeader'>
          <h1>KREAM</h1>
          <span>KICKS RULE EVERYTHING AROUND ME</span>
        </div>
        
        <div className='loginInput'>

          <div>
            <span>이메일 주소</span>
            <input type='text' name='emailValue' placeholder='Email' value={state.emailValue.input}
            onChange={inputControler}></input>
          </div>

          <div>
            <span>비밀번호</span>
            <input type='password' name='passwdValue' placeholder='Passwd' value={state.passwdValue.input}
            onChange={inputControler}></input>
          </div>

        </div>

        {loginBtn}

        <div className='loginEmail'>
          <span>이메일 가입</span>
          <span>|</span>
          <span>이메일 찾기</span>
          <span>|</span>
          <span>비밀번호 찾기</span>
        </div>

        <button>네이버로 로그인</button>
        <button>Apple로 로그인</button>
        
      </div>
    </LoginFormDiv>
  )
}

export default LoginForm