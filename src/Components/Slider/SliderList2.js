import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  .imgBox {
    display: flex;
    img {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background-color: #eee;
    }
  }
  .title {
    margin-left: 12px;
  }
  .maintxt {
    font-size: 13pt;
  }
  .subtxt {
    font-size: 10pt;
  }
`;
const ContentsWrap = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  .scrollList.contentsList {
    display: inline-flex;
    vertical-align: top;
    padding: 20px 0 5px;
  }
  .contentsItem {
    margin-left: 15px;
  }
  .cIimg {
    width: 120px;
    height: 120px;
    background-color: #ddd;
    border-radius: 10px;
    object-fit: cover;
  }
  .cImaintxt {
    font-size: 13pt;
  }
  .cIsubtxt {
    font-size: 10pt;
  }
`;

function SliderList2({ dummyData }) {
  return (
    <Container>
      <TitleWrap>
        <div className="imgBox">
          <img />
        </div>
        <div className="title">
          <div className="maintxt">{dummyData.title}</div>
          <div className="subtxt">{dummyData.subTitle}</div>
        </div>
      </TitleWrap>
      <ContentsWrap>
        <div className="scrollList contentsList">
          {dummyData.data.map((item) => (
            <div className="contentsItem" key={item.id}>
              <a href={item.link}>
                <div className="cIimgBox">
                  <img className="cIimg" src={item.img} alt="img" />
                </div>
                <div className="cItxtBox">
                  <div className="cImaintxt">{item.name}</div>
                  <div className="cIsubtxt">서브</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </ContentsWrap>
    </Container>
  );
}

export default SliderList2;
