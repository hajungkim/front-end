/*
홈 페이지 - 지도
*/
import React from 'react';
import { Button } from '@material-ui/core';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Map from './Map';
import Order from './Order';

export default function Home(){
    return (
      <div>
        <Router>
          <Map />
          <Switch>
            <Route exact path="/order" component={Order} />
          </Switch>
          <Link to="/order">
            <Button variant="contained">주문하기</Button>
          </Link>
        </Router>
      </div>
    );
}