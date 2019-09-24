import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './Main.scss';
import TopNav from '../../components/TopNav';
import Transfer from '../Transfer';
import Balances from '../Balances';

const Main = () => {
  return (
    <div className="main">
      <TopNav />   
        <Switch >
          <Route exact path="/transfers" component={Transfer} />
          <Route exact path="/balances"  component={Balances} />
        </Switch>
    </div>
  )
}

export default Main;
