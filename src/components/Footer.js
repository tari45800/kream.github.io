import styled from 'styled-components';

const FooterDiv = styled.div`
  border-top: 1px solid rgb(230, 230, 230);
  width: 100%;
  height: 553px;
  padding: 50px 40px;
  display: flex;
  justify-content: center;

  span{
    font-size: 0.9rem;
    color: rgb(150, 150, 150);
    margin-bottom: 14px;
  }

  div > span:nth-of-type(1){
    font-size: 1rem;
    color: black;
    margin-bottom: 18px;
    font-weight: bold;
  }

  .mainFooter{
    display: flex;
    flex-direction: column;
    max-width: 1200px;
  }

  .topFooter{
    margin-bottom: 42px;
    
    .topLeftFooter{
      display: inline-block;
      width: 60%;
    }
    .topLeftFooter div{
      display: inline-block;
      width: 50%;
    }

    .topLeftFooter span{
      display: block;
    }

    .topRightFooter{
      display: inline-block;
      width: 40%;
      vertical-align: top;
    }

    & .topRightFooter span:nth-of-type(1){
      font-size: 16px;
      margin-bottom: 18px;
    }

    & .topRightFooter span{
      display: block;
      font-size: 0.8rem;
    }

    & button {
      margin-top: 15px;
      border: none;
      color: white;
      background-color: black;
      padding: 10px;
      font-size: 12px;
      font-weight: bold;
    }

  }

  & .bottomFooter {
    border-top: 1px solid rgb(230, 230, 230);
    
    & span{
      display: block;
      font-size: 12px;
    }

    & span:nth-of-type(1){
      font-size: 14px;
      color: black;
      margin-top: 32px;
      font-weight: normal;
      word-spacing: 15px;
    }

    & span:nth-of-type(2){
      margin: 2px 0;
    }

    & span:nth-of-type(4){
      color: black;
      margin: 2px 0;
      font-weight: bold;
      margin-top: 36px;
    }

    & span:nth-of-type(6){
      max-width: 600px;
    }
  }

  @media (max-width: 750px){
    padding: 50px 15px;
  }
`

function Footer() {
  return(
    <FooterDiv>
      <div className='mainFooter'>
        <div className='topFooter'>
          <div className='topLeftFooter'>
            <div>
              <span> 이용안내 </span>
              <span> 검수기준 </span>
              <span> 이용정책 </span>
              <span> 페널티 정책 </span>
              <span> 커뮤니티 가이드라인 </span>
            </div>
            <div>
              <span> 고객지원 </span>
              <span> 공지사항 </span>
              <span> 서비스 소개 </span>
              <span> 쇼룸 안내 </span>
              <span> 판매자 방문접수</span>
            </div>
          </div>
          <div className='topRightFooter'>
            <span>고객센터 1588-7813</span>
            <span>운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)</span>
            <span>점심시간 평일 13:00 - 14:00</span>
            <span>1:1 문의하기는 앱에서만 가능합니다.</span>
            <button>자주 묻는 질문</button>
          </div>
        </div>
        <div className='bottomFooter'>
          <span>회사소개 인재채용 제휴제안 이용약관 개인정보처리방침</span>
          <span>크림 주식회사 · 대표 김창욱사업자등록번호 : 570-88-01618 사업자정보확인통신판매업 : 제 2021-성남분당C-0093호</span>
          <span>사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층호스팅 서비스 : 네이버 클라우드 ㈜</span>
          <span>신한은행 채무지급보증 안내</span>
          <span>당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.서비스가입 사실 확인</span>
          <span>크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다.</span>
        </div>
      </div>
    </FooterDiv>
  )
}

export default Footer