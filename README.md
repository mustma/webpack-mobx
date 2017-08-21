# webpack-mobx
这是一个webpack+mobx的框架

使用方式：
npm install

启动和打包参见  package.json

按需加载使用的是react-router 4.1.1，将react-router和react-router-dom分开
用bundle-loader处理路由，组件

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
