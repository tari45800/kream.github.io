import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const BannerDiv = styled.div`

  position: relative;
  width: 100vw;
  overflow: hidden;//빠르게 움직일 때 삐져나옴 방지

  .bannersContainer {
    width: ${props => props.props.length}00vw;
    position: relative;
    height: 480px;
    left: -${props => props.BannerNum * 100}vw;
    transition: 1s;
    
  }

  .bannerDiv{
    display: inline-block;
    width: 100vw;
    height: 480px;
    //임시배경 
    background-color: #FAEEED;

    div{
      max-width: 1200px;
      margin: 0 auto;
    }

    img{
      width: 100%;
      height: 480px;
      object-fit: cover;
    }

  }

  .BannerButton{
    position: absolute;
    top: 0;
    width: 100vw;
    z-index: 1;
  }

  .buttonContainer{
    width: 95%;
    /* max-width: 1200px; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 480px;
  }

  .midBanner{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    img{
      opacity: 0.3;
      cursor: pointer;
    }

  }
  .bottomBanner{
    margin: 0 auto;
    height: 35px;
    
    span{
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin:6px;
      background-color: rgba(0, 0, 0,0.2);
      cursor: pointer;
    }

    span:nth-of-type(${props => props.BannerNum+1}){
      background-color: white;
    }
  }

  @media (max-width: 1070px){
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 7;

    .buttonContainer{
      width: 100%;
      height: auto;
      aspect-ratio: 16 / 7;
    }

    .bannerDiv img{
      height: auto;
      aspect-ratio: 16 / 7;

    }
  }

  @media (max-width: 750px){
    height: 480px;

    .buttonContainer{
      height: 480px;

    }

    .bannerDiv img{
      height: 480px;
    }

    .midBanner{
     display: none;
    }
  }

`

function Banner() {

  // 총 배너 갯수를 담은 배열
  const banners = [0,1,2,3,4,5,6,7]

  // 현재 페이지 관리 state
  const [currentBanner, changeBanner] = useState(0)

  // 화살표 버튼 관리 함수
  const sideChange = (e)=>{
    if(currentBanner+e > banners.length-1){
      changeBanner(0)
      return
    }
    if(currentBanner+e < 0){
      changeBanner(banners.length-1)
      return
    }
    changeBanner(currentBanner+e)
  }

  // 점 버튼 관리 함수
  const navChange = (e) => {
    changeBanner(e)
  }

  return(
    <BannerDiv className='bannerDiv' props={banners} BannerNum={currentBanner}>
      <div className='bannersContainer'>
        {banners.map((el, idx) => {
          return <div className='bannerDiv' key={idx}>
                    <div>
                      <img src={`../images/banners/banner (${el}).png`}></img>
                    </div>
                 </div>
        })}
      </div>
      <div className='BannerButton'>
        <div className='buttonContainer'>
          <div className='topBanner'></div>
          <div className='midBanner'>
            <img src='../images/banners/icons8-less-than-50.png' onClick={()=>{sideChange(-1)}}></img>
            <img src='../images/banners/icons8-more-than-50.png' onClick={()=>{sideChange(1)}}></img>
          </div>
          <div className='bottomBanner'>
          {banners.map((el, idx) => {
            return <span key={idx} name='bannerNav' onClick={()=>{navChange(el)}}></span>
          })}
          </div>
        </div>
      </div>

    </BannerDiv>
  )
}


export default Banner;