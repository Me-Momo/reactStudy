import React,{ Component } from 'react';
import List from './components/list';
import "./index.css";


class Communication extends Component{

    constructor(){
        super();
        this.state={
            items:[
                {id:'subscriber-1',name:'A',avatarUrl:'http://q3.qlogo.cn/g?b=qq&k=A05mSkjvDm1b9854Grp2Pw&s=140&t=1490951121'},
                {id:'subscriber-2',name:'B',avatarUrl:'http://q3.qlogo.cn/g?b=qq&k=A05mSkjvDm1b9854Grp2Pw&s=140&t=1490951121'},
                {id:'subscriber-3',name:'C',avatarUrl:'http://q3.qlogo.cn/g?b=qq&k=A05mSkjvDm1b9854Grp2Pw&s=140&t=1490951121'}],
            message:[]
        }
        this.sendMessage=this.sendMessage.bind(this);
    }
    sendMessage(speaker,content){
        this.setState((prevState,props)=>({
            message:[{speaker,content}]
        }));
    }
  
    render(){
        return(
                <List {...this.state} sendMessage={this.sendMessage}/>
        )
    }
}

export default Communication;