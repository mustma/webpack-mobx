import { observable, action, computed, useStrict } from 'mobx'

class indexState {
    
    @observable container = {
        boxState	: false,
        ruleText	: '8秒内，找出可乐草本配方（提示：可乐配方可以参照瓶身配料说明哦），完成游戏参与随机抽奖，可赢取电影票或KTV欢唱券奖励！'
    };
    
    @action statGame(){
    	this.container.boxState = true;
    };
    @action goHome(){
    	this.container.boxState = false;
    	window.appHistory.replace('index');
    };
    
}

export default new indexState()