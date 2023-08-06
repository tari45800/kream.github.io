import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const ListDiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;

  .scroll-box::-webkit-scrollbar {
    display:none; 
  }


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

  button {   
    margin-top: 20px;
    margin: 0 auto;
    margin-top: 20px;
    height: 40px;
    width: 100px;
    border: 1px solid rgb(200, 200, 200);
    border-radius: 12px;
    background-color: white;
    display: ${props => props.props ? 'none' : 'block'};
  }
  
  @media (max-width: 940px){
    padding: 40px 11px;
  }

  @media (max-width: 750px){
    max-width: 750px;
    overflow: scroll;
    
    .listContainer{
      width: ${props => props.width * 210}px;
    }

    button {
      display: none;
    }
  }
`

function List() {  

  // 전역 상태 관리 state
  const state = useSelector(state => state.itemReducer);
  const { shoes } = state;

  // 페이지에 보여줄 게시물을 관리하는 state
  const [ startPage, setPage ] = useState(4);

  // 마지막 버튼 삭제 state
  const [ none, setNone ] = useState(false);

  // 현재 페이지를 담고있는 객체
  const currentPage = shoes.filter((el) => {
    return el.id <= startPage;
  })

  // 페이지 이동 함수
  const movePage = () => {
    
    // 만약 남은 게시물 수가 4개 이하라면 버튼 삭제
    if(startPage >= shoes.length-4){
      setNone(true)
    }

    // 페이지 4개씩 추가
    setPage(startPage+4)
  }

  const mediaPage = useMediaQuery ({
    query: "(max-width:750px)"
  }) ? shoes : currentPage;

  console.log(shoes.length)
  return(
    <ListDiv props={none} width={shoes.length}>
      <div className='listContainer'>
        <div className='orderDiv'>
          <span className=''>Just Dropped</span>
          <span className=''>발매 상품</span>
        </div>

        <div className='itemsDiv'>
          {mediaPage.map((item, idx) => <Item item={item} key={idx}></Item>)}
        </div>
        
        <div>
          <button onClick={() => {movePage()}}>더보기</button>
        </div>
      </div>
    </ListDiv>
  )
}

export default List;