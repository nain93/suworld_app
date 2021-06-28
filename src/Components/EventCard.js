import React from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  .scrollList.contentsList {
    display: inline-flex;
    vertical-align: top;
    padding: 20px 0 5px;
  }
  .contentsItem {
    margin: 12px 20px;
  }
  .cIimg {
    width: 100%;
    height: 160px;
    background-color: #ddd;
    border-radius: 10px;
    object-fit: cover;
  }
  .cICBox {
    display: flex;
    justify-content: space-between;
  }
  .cICtxtBox {
    display: block;
    word-break: break-all;
  }
  .cICmaintxt {
    font-size: 13pt;
  }
  .cICsubtxt {
    font-size: 10pt;
  }
  .cICdateBox {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 120px;
  }
`;

function EventCard({
  dummyData = {
    title: "",
    subTitle: "",
    data: [],
  },
}) {
  return (
    <Container>
      {dummyData.data.map((item) => (
        <div className="contentsItem" key={item.id}>
          <a>
            <div className="cIimgBox">
              <img className="cIimg" src={item.img} alt="img"/>
            </div>
            <div className="cICBox">
              <div className="cICtxtBox">
                <div className="cICmaintxt">{item.name}</div>
                <div className="cICsubtxt">{item.subName}</div>
              </div>
              <div className="cICdateBox">
                <div className="startDate">{item.startdate}</div>
                <div className="endDate">
                  <b>~</b>
                  {item.enddate}
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </Container>
  );
}

export default EventCard;
