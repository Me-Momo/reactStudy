import React,{ Component } from 'react';

class Subscriber extends Component{
    constructor(props){
        super(props);
        this.state={
            inputMsg:'',
            message:[]
        }

        // 记得一定要绑定this上下文
        this.handleChange=this.handleChange.bind(this);
        this.handleSend=this.handleSend.bind(this);
        this.clearMessage=this.clearMessage.bind(this);
        this.clearAllMessage=this.clearAllMessage.bind(this);
        this.handleKeyPress=this.handleKeyPress.bind(this);
    }
    // 添加生命周期钩子,从而 父组件的状态变化 可以修改子组件的状态变化
    componentWillReceiveProps(nextProps) {
        this.setState((prevState)=>({
            message: [].concat.call(prevState.message,nextProps.message)
        }));
    }
    handleChange(event){
        // this.props.sendMessage(this.props.name+":"+event.targer.value);
        const msg=event.target.value;
        this.setState((prevState,props)=>({
            inputMsg:msg
        }));
    }
    handleKeyPress(event){
        if(event.key == "Enter"){
            this.handleSend();
        }
    }
    handleSend(){
        this.props.sendMessage(this.props.name,this.state.inputMsg);
        this.clearMessage();
    }
    clearMessage(){
        // Here use ref to get form values
        this.textInput.value = ""
    }
    clearAllMessage(){
        // Here use ref to get form values
        this.setState({
            message:[]
        })
    }

    render(){

        // const MsgBox = (
        //     <div className="msgBox">
        //         {this.props.message.map((msg,index)=>{
        //             return <p key={'message'+index} className={msg.speaker===this.props.name?'message-self':'message-other'}><span className="message-speaker">{msg.speaker}</span>{msg.content}</p>
        //         })}
        //     </div>
        // )
        // update:use this.state.message
        const MsgBox = (
                <div className="msgBox">
                    {this.state.message.map((msg,index)=>{
                        return <p key={'message'+index} className={msg.speaker===this.props.name?'message-self':'message-other'}><span className="message-speaker">{msg.speaker}</span>{msg.content}</p>
                    })}
                </div>
        )
        return (
            <div className="itemContainer">  
                { MsgBox }
                <img className="userInfo-avatar" src={this.props.avatarUrl}  alt="avatar" width="40px" height="40px"/>
                <div className="msgInputBox">
                    <label>
                        user-{this.props.name} 👄
                        <input type="text" value={this.state.value} onChange={this.handleChange} ref={(input)=>{this.textInput=input;}} onKeyPress={this.handleKeyPress}/>
                    </label>
                    <input type="submit" value="Send" onClick={this.handleSend}/>&nbsp;
                    <input type="reset" value="Clear" onClick={this.clearAllMessage}/>
                </div>
            </div> 
        )
    }
}

export default Subscriber;