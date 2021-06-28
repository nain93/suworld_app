import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
`;

const AdWrap = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  .scrollList.adList {
    display: inline-flex;
    vertical-align: top;
    padding: 20px 0 5px;
  }
  .adItem {
    margin-left: 8px;
    margin-right: 7px;
  }
  .cAimg {
    width: 280px;
    height: 120px;
    background-color: #ddd;
    border-radius: 10px;
    object-fit: cover;
  }
`;

function SliderAd({ dummyData2 = [] }) {
  return (
    <Container>
      <AdWrap>
        <div className="scrollList adList">
          {dummyData2.map((item) => (
            <div className="adItem" key={item.id}>
              <a className="cAimgBox">
                <img className="cAimg" src={item.img} alt="img" />
              </a>
            </div>
          ))}
        </div>
      </AdWrap>
    </Container>
  );
}

export default SliderAd;
