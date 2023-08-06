import React from 'react';
import styled from 'styled-components';
import Hr from './Hr';

const KategorieContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 36px;

  @media (max-width: 940px){
    padding: 40px 11px;
  }
`
const KategorieDiv = styled.div`
  width: 20%;
  padding: 0 4px 20px 4px;
  display: inline-block;
  text-align: center;

  img{
    height: 100px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  span{
    font-size: 0.9rem;
    color: #505050;
  }

  @media (max-width: 750px){
    img{
      height: auto;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
    }
  }
`

function Kategorie() {

  // 카테고리 배열
  const kategories = [
    {
      'img':'kategorie1',
      'imgName':'퀴즈 오픈 예정'
    },
    {
      'img':'kategorie2',
      'imgName':'남성 추천'
    },
    {
      'img':'kategorie3',
      'imgName':'여성 추천'
    },
    {
      'img':'kategorie4',
      'imgName':'웰컴드로우'
    },
    {
      'img':'kategorie5',
      'imgName':'인기 브랜드'
    },
    {
      'img':'kategorie6',
      'imgName':'정가 아래'
    },
    {
      'img':'kategorie7',
      'imgName':'인기 럭셔리'
    },
    {
      'img':'kategorie8',
      'imgName':'New Jeans'
    },
    {
      'img':'kategorie9',
      'imgName':'셀럽픽'
    },
    {
      'img':'kategorie10',
      'imgName':'무조건 포인트'
    },
  ]

  return(
    <>
      <KategorieContainer>
        {kategories.map((el, idx) => {
          return<KategorieDiv key={idx}>
                    <img src={`../images/kategories/${el.img}.jpg`}></img>
                    <span>{el.imgName}</span>
                </KategorieDiv>

          })}
          
      </KategorieContainer>
      <Hr></Hr>
    </>
  )
}

export default Kategorie;