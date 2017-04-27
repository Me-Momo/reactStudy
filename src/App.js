import React,{ Component } from 'react';
import Cart from './Cart';
import Clock from './Clock';
import Communication from './Communication';
import LineChart from './charts/line-chart';

export default class App extends Component{

    constructor(props){
        super(props);
        // initial state in the constructor
        this.state={
            navId:'Cart'
        }
    }
    changeNav(navId){
        this.setState({navId:navId});
    }
    render(){
        return(
            <div>
                <ul className='container nav-list'>
                    <li onClick={this.changeNav.bind(this,'Cart')}>购物车 Demo</li>
                    <li onClick={this.changeNav.bind(this,'Clock')}>时钟 Demo</li>
                    <li onClick={this.changeNav.bind(this,'Comnunication')}>父子间通信 Demo</li>
                    <li onClick={this.changeNav.bind(this,'LineChart')}>条形图📊</li>
                </ul>
                <div className="container">
                    <div className="demo-item" style={{display:this.state.navId==='Cart'?'block':'none'}}>
                        <Cart />                        
                    </div>
                    <div className="demo-item" style={{display:this.state.navId==='Clock'?'block':'none'}}>                    
                        <Clock />
                    </div>
                     <div className="demo-item" style={{display:this.state.navId==='Comnunication'?'block':'none'}}>                    
                        <Communication />
                    </div>
                    <div className="demo-item" style={{display:this.state.navId==='LineChart'?'block':'none'}}>                    
                        <LineChart />
                    </div>
                </div>
            </div>
        )
    }

}