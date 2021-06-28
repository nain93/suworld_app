import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Recommend from "./Recommend";
import Popular from "./Popular/Popular";
import Category from "./Category";
import Event from "./Event";
import Issue from "./Issue";

const Container = styled.div``;

function All({ match }) {
  return (
    <Container>
      <Switch>
        <Route path={match.path} exact component={Recommend} />
        <Route path={`${match.path}/popular`} component={Popular} />
        <Route path={`${match.path}/category`} component={Category} />
        <Route path={`${match.path}/event`} component={Event} />
        <Route path={`${match.path}/issue`} component={Issue} />
      </Switch>
    </Container>
  );
}

export default All;
