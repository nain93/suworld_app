import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5% 0;
  button {
    display: flex;
  }
`;

function PageNotFound() {
  const { goBack } = useHistory();

  const handleGoBack = () => {
    goBack(1);
    return;
  };
  return (
    <Container>
      <button onClick={handleGoBack}>
        <BiArrowBack size="24" />
        뒤로
      </button>
      <span> 404 Page Not Found</span>
    </Container>
  );
}

export default PageNotFound;
