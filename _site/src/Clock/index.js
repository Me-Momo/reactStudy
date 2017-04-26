import React,{Component} from 'react';
import "./index.css";
export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    componentDidMount(){
        this.tickId=setInterval(()=>{
            // use setState to update state!!!
            this.setState({date:new Date()})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.tickId);
    }

    render(){
        return (
            <div className="clock">
                现在时间：{this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}
