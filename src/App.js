import GlobalStyles, { GlobalContainer } from "./GolbalStyles";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Title from "./Title";
import styled from "styled-components";
import PageNotFound from "./PageNotFound";
import Nav from "./Nav";
import All from "./AllPage";
import MainNet from "./MainPage/MainNet";
import Mining from "./MainPage/Mining";
import Wallet from "./MainPage/Wallet";
import Game from "./MainPage/Game";
import Enter from "./MainPage/Enter";
import Shopping from "./MainPage/Shopping";
import Community from "./MainPage/Community";
import { AiOutlineSearch } from "react-icons/ai";

const Container = styled.div`
  max-width: 768px;
  height: 100vh;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  margin: 0 auto;
  padding-top: 1%;
`;

const Header = styled(GlobalContainer)`
  height: 20%;
  width: 100%;
`;

const InputBlock = styled.div`
  position: relative;
  padding: 0 20px;

  button {
    color: #9775fa;
    font-size: 28px;
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const InputBox = styled.input`
  border: 2px solid #9100ff;
  border-radius: 5px;
  padding: 1% 3%;
  width: 100%;
  margin-bottom: 1%;
  height: 8vh;
`;

function App() {
  const { pathname } = useLocation();

  return (
    <Container>
      <GlobalStyles />
      {pathname === "/" ? (
        <Header>
          <Title />
          <InputBlock>
            <InputBox placeholder="검색어를 입력해주세요" />
            <button>
              <AiOutlineSearch />
            </button>
          </InputBlock>
        </Header>
      ) : pathname.includes("/all") ? (
        <>
          <Header>
            <InputBlock>
              <InputBox placeholder="검색어를 입력해주세요" />
              <button>
                <AiOutlineSearch />
              </button>
            </InputBlock>
          </Header>
          <Nav />
        </>
      ) : (
        ""
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mainnet" component={MainNet} />
        <Route path="/mining" component={Mining} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/game" component={Game} />
        <Route path="/enter" component={Enter} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/community" component={Community} />
        <Route path="/all" component={All} />
        {/* <Route path="/:id" component={ContentDetail} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </Container>
  );
}

export default App;
