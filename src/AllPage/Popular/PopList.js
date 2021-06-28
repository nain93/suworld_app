import React from "react";
import styled from "styled-components";

const TabListBlock = styled.div`
  .items {
    display: flex;
    padding: 0 20px;
  }

  .item-number {
    width: 30px;
    font-size: 15pt;
  }

  .item {
    width: 120px;
    height: 120px;
    margin-top: 10px;
    /* margin-left: 50px;
    margin-right: 20px; */
    padding-right: 0px;
    border-radius: 10px;
    background-color: ${(props) => props.color};

    img {
      width: 100%;
      height: 100%;
      padding: 0;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .itme-content {
    width: 69%;
    margin-left: 0px;
    padding: 10px 20px;
  }

  .item-title {
    width: 100%;
    font-size: 15pt;
    font-weight: bold;
  }

  .item-category {
    font-size: 12pt;
    color: #adb5bd;
  }
`;

const PopList = (props) => {
  if (props.selctBtn === 0) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={el.id}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item">
                  <img src={el.img} alt="img" />
                </div>
                <div className="itme-content">
                  <p className="item-title">{el.name}</p>
                  <p className="item-category">{el.desc.slice(0, 15)}...</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 1) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 2) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 3) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 4) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 5) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 6) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  } else if (props.selctBtn === 7) {
    return (
      <div>
        {props.tabListNumber.map((el, i) => {
          return (
            <TabListBlock key={i}>
              <div className="items">
                <p className="item-number">{i + 1}</p>
                <div className="item"></div>
                <div className="itme-content">
                  <p className="item-title">추천리스트{i + 1}</p>
                  <p className="item-category">카테고리</p>
                </div>
              </div>
            </TabListBlock>
          );
        })}
      </div>
    );
  }
};

export default PopList;
