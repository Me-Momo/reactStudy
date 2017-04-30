import  React, { Component } from 'react';
import  axios from 'axios';
import 'scss/index.scss';

class TodoList extends Component {

    constructor(){
        super();
        this.state = {
            todoItems:[{
                "name":"run",
                "id":"todo1",
                "done":false,
            },{
                "name":"eat breakfast",
                "id":"todo2",                
                "done":false,
            },{
                "name":"study 2 hours",
                "id":"todo3",                
                "done":false,
            },{
                "name":"see a movie",
                "id":"todo4",                
                "done":false,
            }],
            acList: []
        }
    }

    conpomentDidMount(){
        this.fetchData('/todoItems')
            .then((result) =>{
                this.setState({
                    todoItems: result.data
                });
            },() =>{
               console.log("Fail to fetch todoItems ....") 
            });
    }

    fetchData(url){
        return axios.get(`http://localhost:9999/api${url}`);
    }

    handleChange (itemId){
        let nextAcList = this.state.acList.map(item =>{
            return item;
        });
        const nextTodoItems = this.state.todoItems.map(todoItem => {
            if(todoItem.id == itemId && todoItem.done){
                nextAcList = nextAcList.filter(item =>{
                    if(item == todoItem.name){
                        return false;
                    }
                    return true;
                });
                return Object.assign(todoItem,{id:itemId,done: false});
            }
            if(todoItem.id == itemId && !todoItem.done){
                nextAcList.push(todoItem.name);
                return Object.assign(todoItem,{id:itemId,done: true});
            }
            return todoItem;
        });
         
        this.setState({
            todoItems: nextTodoItems,
            acList: nextAcList
        })
    }

    render(){
        const that = this;
        const todoItems = (
                that.state.todoItems.map(function(item,index) {
                    return (
                        <li key={item.id}>
                            <input onChange={that.handleChange.bind(that,item.id)} type="checkbox"/>{ item.name }
                        </li>
                    )
                })
        );  
        return (
            <div>
                <ul style={{ listStyle: "none"}}>{ todoItems }</ul>
                <div className="acListBox">
                    已完成清单：{ this.state.acList.join(' , ')}
                </div>
            </div>
            
        )
    }
};


module.exports = TodoList;