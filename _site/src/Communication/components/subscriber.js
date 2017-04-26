import React,{ Component } from 'react';

class Subscriber extends Component{
    constructor(props){
        super(props);
        this.state={
            inputMsg:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        // this.props.sendMessage(this.props.name+":"+event.targer.value);
        const msg=event.target.value;
        this.setState((prevState,props)=>({
            inputMsg:msg
        }));
    }
    handleSubmit(){
        this.props.sendMessage(this.props.name,this.state.inputMsg);
        this.clearMessage();
    }
    clearMessage(){
        // Here use ref to get form values
        this.textInput.value=""
    }

    render(){

        return (
            <div className="itemContainer">     
                <div className="msgBox">
                    {this.props.message.map((msg,index)=>{
                        return <p key={'message'+index} className={msg.speaker===this.props.name?'message-self':'message-other'}><span className="message-speaker">{msg.speaker}</span>{msg.content}</p>
                    })}
                </div>
                <img className="userInfo-avatar" src={this.props.avatarUrl}  alt="avatar" width="40px" height="40px"/>
                <div className="msgInputBox">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            user-{this.props.name} 👄
                            <input type="text" value={this.state.value} onChange={this.handleChange} ref={(input)=>{this.textInput=input;}}/>
                        </label>
                        <input type="submit" value="Send" />&nbsp;
                        <input type="reset" value="Clear"/>
                    </form>
                </div>
            </div> 
        )
    }
}

export default Subscriber;