import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import SuperHero from './Components/SuperHero'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
          <Switch>
          <Route exact path="/" component={App} />
          <Route path="/:id" children={<SuperHero />}/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

