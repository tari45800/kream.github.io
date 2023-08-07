import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { isLogin } from '../actions';

const HeaderDiv = styled.div`
  @font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  position: relative;
  height: 130px;
  width: 100%;

  .Link{
    color: black;
  }


  .headerContainer{
    position: fixed; 
    width: 100%;
    background-color: white;
    z-index: 2;
    border-bottom: 1px solid #ddd;
  }

  .mainHeader{
    max-width: 1280px;
    height: 130px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3px 40px 0 40px;
  }

  .topNav{
    display: flex;
    justify-content: end;

    & span{
      font-size: 0.7rem;
      color: #505050;
      margin-left: 25px;
    }
  }

  .midNav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 9px;

    .leftNav{
      span{
        font-family: 'SBAggroB';
        font-style: italic;
        font-size: 1.5rem;
        color: black;
      }
    }

    .rightNav{
      span{
        font-size: 1.1rem;
        margin-left: 42px;
      }
      span:nth-of-type(1){
        font-weight: bold;
      }
    }
  }

  .bottomNav{

    span{
      color: black;
      margin-right: 27px;
      display: inline-block;
      height: 28px;
    }

    span:nth-of-type(${props => props.page}){
      font-weight: bold;
      border-bottom: 2px solid black;
    }
  }
   
  @media (max-width: 940px){
    height: 95px;
    .mainHeader{
      padding: 15px 15px 0 15px;
      height: 95px;
    }
    .topNav{
      display: none;
    }
    .rightNav{
      display: none;
    }
  
  }

  @media (max-width: 750px){
    .midNav .leftNav span{
      font-size: 1.2rem;
    }
  }

`

function Header() {

  // 전역 상태 관리 state
  const state = useSelector(state => state.itemReducer);
  const dispatch = useDispatch()


  // 페이지 관리 state - 한무스크롤, 페이지네이션
  const [ page, changePage] = useState(1);

  // 페이지 관리 링크 배열
  const bottomSpan= [
    <Link className='Link' to='/'>추천</Link>,
    <Link className='Link' to='/ManPage'>남성</Link>,
    '여성','브랜드','기획전'
  ]

  // 페이지 변경 함수
  const controlPage = (e) =>{
    changePage(e)
  }

  // 로그인, 로그아웃 페이지 관리 함수
  const login = () =>{
    if(state.login.isLogin){
      return <span onClick={()=>dispatch(isLogin())}>로그아웃</span>
    } else {
      return <Link className='Link' to='/Login'>
        <span>로그인</span>
    </Link>
    }
  }

  return(
    <HeaderDiv page={page}>
      <div className='headerContainer'>
        <div className='mainHeader'>

          <div className='topNav'>
            <div>
              <span>고객센터</span>
              <span>관심상품</span>
              {login()}
            </div>
          </div>

          <div className='midNav'>
            <div className='leftNav'>
              <Link className='Link' to='/'>
                <span className='title'>KREAM</span>
              </Link>
            </div>
            <div className='rightNav'>
              <span>HOME</span>
              <span>STYLE</span>
              <span>SHOP</span>
              <span>MY</span>
              <span>&#128269;</span>
            </div>
          </div>

          <div className='bottomNav'>
            <div>
              {bottomSpan.map((el, idx) => {
                return <span key={idx} onClick={()=>{controlPage(idx+1)}}>{el}</span>
              })}
              <div className='underLine'></div>
            </div>
          </div>

        </div>
      </div>
    </HeaderDiv>
  )
}

export default Header