import React, { useState } from "react";
import styled from "styled-components";
import { GlobalContainer } from "../../GolbalStyles";
import PopNav from "./PopNav";
import PopList from "./PopList";
import dummyData from "../../dummyData";

const Container = styled(GlobalContainer)``;

const TabSectionBlock = styled.div`
  width: 100%;
  background-color: white;
  margin: 0 auto;
`;

function Popular() {
  const [tabListNumber, setTabListNumber] = useState(dummyData.funItem1.result);

  const [selctBtn, setSelectBtn] = useState(0);
  return (
    <Container>
      <TabSectionBlock>
        <PopNav
          selctBtn={selctBtn}
          setSelectBtn={setSelectBtn}
          setTabListNumber={setTabListNumber}
        />
        <PopList
          tabListNumber={tabListNumber}
          setTabListNumber={setTabListNumber}
          selctBtn={selctBtn}
          setSelectBtn={setSelectBtn}
        />
      </TabSectionBlock>
    </Container>
  );
}

export default Popular;
