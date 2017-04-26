import React,{ Component } from 'react';
import Subscriber from './subscriber';
import _ from 'lodash';

class List extends Component{
    renderItems(){
        /**
         * return blackList
         */
        const props=_.omit(this.props,'items');
        return _.map(this.props.items,(item,index) => <Subscriber key={item.id} {...item} {...props} />);
    }
    render(){
        return (
            <div className="listContainer">
                 { this.renderItems() } 
            </div>
        );
    }
}

export default List;