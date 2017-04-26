const React=require('react');
const axios=require('axios');

const TodoList = function(){
    constructor(props){
        super(props);
        this.state={
            todoItems:[]
        }
    }

    conpomentDidMount(){
        this.initData();
    }

    initData(){
         axios.get(`http://localhost:9999/api/todoItems`)
            .then(result => {
                this.setState({ todoItems:result.data },function(){

                });
            }).catch(result=>{
                console.log(result);
            });
    }
    render(){
        this.state.todoItems=this.state.todoItems.map(function(item,index) {
            return (
                <li key={index}><input type='checkbox' value={item.name} checked={item.done}/></li>
            )
        });  
        return (
            <ul>{ todoItems }</ul>
        )
    }
};

module.exports=TodoList;