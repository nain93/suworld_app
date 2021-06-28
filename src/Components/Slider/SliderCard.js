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
    width: 240px;
    height: 140px;
    background-color: #ddd;
    border-radius: 10px;
  }
  .cICBox {
    display: flex;
    margin: 10px 0 0 0;
  }
  .cICimg {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background-color: #fff;
    object-fit: cover;
    border: 1px solid #eee;
  }
  .cICtxtBox {
    margin-left: 10px;
  }
  .cICmaintxt {
    font-size: 13pt;
  }
  .cICsubtxt {
    font-size: 10pt;
  }
`;

function SliderCard({
  dummyData = {
    title: "",
    subTitle: "",
    data: [],
  },
}) {
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
              <a>
                <div className="cIimgBox">
                  <img className="cIimg" src={item.img} />
                </div>
                <div className="cICBox">
                  <img className="cICimg" src={item.subImg} />
                  <div className="cICtxtBox">
                    <div className="cICmaintxt">{item.name}</div>
                    <div className="cICsubtxt">{item.category}</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </ContentsWrap>
    </Container>
  );
}

export default SliderCard;
