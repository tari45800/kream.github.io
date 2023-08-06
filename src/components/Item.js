import React from 'react';
import styled from 'styled-components';


const ListDiv = styled.div`
  margin: 16px 0;
  width: 25%;
  display: inline-block;
  padding: 4px;

  img{	
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 6px;
    background-color: #EBF0F4;
  }


  span{
    display: block;
  }

  .brand{
    color: #303030;
    text-decoration: underline;
    font-weight: bold;
    font-size: 0.9rem;
  }

  .info{
    font-size: 0.8rem;
    margin: 8px 0 12px 0;
  }

  .price{
    font-weight: bold;
  }

  .now{
    font-size: 0.7rem;
    color: #808080;
  }

  @media (max-width: 750px){
    width: 210px;
  }
 
`


function Item({item}) {

  return(
    <ListDiv>
      <div>
        <img src={item.img} alt={item.name}></img>
        <div>
          <span className='brand'>{item.brand}</span>
          <span className='info'>{item.name}</span>
          <span className='price'>{item.price}</span>
          <span className='now'>즉시 구매가</span>
        </div>
      </div>
    </ListDiv>
  )
}

export default Item;