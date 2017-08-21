import React from 'react'

import { observer } from 'mobx-react'

import indexState from './index.state'
import '../../scss/index'

@observer
class Index extends React.Component {
    componentWillMount(){
       console.log("组件挂载前调用，只调用一次");
    }
    componentDidMount(){
        console.log("组件挂载后，子组件也挂载好了，这时候可以调用refs(操作DOM),只调用一次");
    }
    componentWillReceiveProps(nextProps){
        console.log("父组件发生render，子组件调用该函数，不管父子组件有没有发生数据交换")
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps+"调用setState()方法后，调用该方法判断组件是否重新render，返回true需要，false不需要，该方法可以提高渲染效率"+nextState);
        return false;
    }
    componentWillUpdate(){
        console.log("shouldComponentUpdate返回true后，该函数会被调用");
    }
    componentDidUpdate(){
         console.log("组件渲染之后调用");
    }
    componentWillUnmount(){
        console.log("组件卸载时候调用");
    }
    render(){
        return (
            <div className="page index">
                <div className="btn" onClick={()=>{indexState.statGame()}}></div>
                <div className={indexState.container.boxState?'ruleWrap show':'ruleWrap'}>
                    <div className="rule">
                        <img className="title" src={require('../../images/title.png')} />
                        <div className="text">{indexState.container.ruleText}</div>
                        <div className="btn" onClick={()=>{indexState.goHome()}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index