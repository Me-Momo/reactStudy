import React,{Component} from 'react';
import _ from 'lodash';
import Item from "./item";

export default class List extends Component{
    renderItems(){
        /**
         * return blackList
         */
        const props=_.omit(this.props,'items');
        return _.map(this.props.items,(item,index) => <Item key={index} {...item} {...props} />);
    }
    render(){
        return (
            <tbody>
                 { this.renderItems() } 
            </tbody>
        );
    }
}