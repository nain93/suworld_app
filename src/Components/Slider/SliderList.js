import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
`;
const TitleWrap = styled.div`
  .title {
    padding: 20px 20px 0;
  }
  .maintxt {
    font-size: 15pt;
  }
  .subtxt {
    font-size: 13pt;
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

function SliderList({ dummyData }) {
  return (
    <Container>
      <TitleWrap>
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
                  <div className="cIsubtxt">{item.category}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </ContentsWrap>
    </Container>
  );
}

export default SliderList;
