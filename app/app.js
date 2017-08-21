import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter,Route } from 'react-router-dom'
import { Router } from 'react-router'

//import routeConfig from './config/routerConfig';
import './scss/app'
// import indexComponent from './containers/index/index'
// import Order from './containers/order/order'
// <Router routes={routeConfig}></Router>


import Bundle from './components/bundle';
import Index from 'bundle-loader?lazy!./containers/index/index';
import Order from 'bundle-loader?lazy!./containers/order/order';

const IndexComponent = () => (
    <Bundle load={Index}>
        {(Index) => <Index />}
    </Bundle>
);
const OrderComponent = () => (
    <Bundle load={Order}>
        {(Order) => <Order />}
    </Bundle>
);

render((
    <BrowserRouter>
         <div className="page">
            <Route exact path='/' component={IndexComponent} />
            <Route path='/order' component={OrderComponent} />
         </div>   
    </BrowserRouter>
), document.getElementById('container'))

