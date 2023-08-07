import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';


const ManListDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;

  .orderDiv{
    span:nth-of-type(1) {
      display: block;
      font-weight: bold;
      font-size: 1rem;
    }

    span:nth-of-type(2) {
      color: rgb(140, 140, 140);
      font-size: 1rem;
    }

  }

  & > .pagination {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;

    & > div {
      display: flex;
      justify-content: center;
      height: 40px;
      width: 100px;
      border: 1px solid rgb(200, 200, 200);
      border-radius: 12px;
      background-color: white;
    }

    & .pageNum{
      cursor: pointer;
      margin: 10px;
    }

    & span{
      font-size: 14px;
    }

    & span:nth-of-type(${props => props.props}){
      font-weight: bold;
    }

  }

  & > .itemsDiv{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  @media (max-width: 940px){
    padding: 40px 11px;
  }
`

function ManList() {

  // 전역 상태 관리 state
  const state = useSelector(state => state.itemReducer);
  const { outer } = state;


  // 페이지에 보여줄 게시물을 관리하는 state
  const [ startPage, setPage ] = useState(12);


  // 페이지 번호를 관리하는 state
  const [ PageNum, setPageNum ] = useState(1);


  // 현재 페이지를 담고있는 객체
  const currentPage = outer.filter((el) => {
    return el.id >= startPage-11 && el.id <= startPage;
  })


  // 페이지네이션 계산 함수
  const pagination = () => {
    const pageNum = Math.ceil(outer.length / 12)
    const pageNums = []
    for(let i = 1; i <= pageNum; i++){
      pageNums.push(<span key={i} className='pageNum' onClick={() => {movePage(i)}}>{i}</span>)
    }
    return pageNums;
  }


  // 페이지 이동 함수
  const movePage = (e) => {
    setPageNum(e)
    setPage(e * 12);
  }


  return(
    <ManListDiv props={PageNum}>
      <div className='orderDiv'>
        <span className=''>Just Dropped</span>
        <span className=''>발매 상품</span>
      </div>

      <div className='itemsDiv'>
        {currentPage.map((item, idx) => <Item item={item} key={idx}></Item>)}
      </div>
      
      <div className='pagination'>
        <div>{pagination()}</div>
      </div>
    </ManListDiv>
  )
}

export default ManList;