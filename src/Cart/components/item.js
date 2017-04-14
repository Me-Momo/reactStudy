import React,{Component} from 'react';
import img80 from './img-80.png';

export default class Item extends Component{

    constructor(props){
        super(props);
        this.state={
            itemTotal:0
        }
    }
    getInitialState(){
        this.setState({itemTotal:this.props.quantity*this.props.price});
    }
    componentWillMount(){

    }
    componentWillUnmount(){
        this.props.handleSubTotal();
    }

    handleChange(itemId,e){
        this.setState({itemTotal:e.target.value*this.props.price});
        this.props.changeQty(itemId,e.target.value);
    }

    render(){
        return(
           <tr>
				<td>
                    <img className="am-radius" alt="80*80" src={img80} style={{display:'inline-block',verticalAlign:'bottom'}}/>
                    <div className="media-body" style={{display:'inline-block',marginLeft:'15px'}}>
                    <h5 className="media-heading"><a href="#">{this.props.name}</a></h5>
                    <p className="media-heading"> by <a href="#">{this.props.brand}</a></p>
                    </div>
				</td>
				<td>
					<input type="number" min="0" max={this.props.limit} value={this.props.quantity} onChange={this.handleChange.bind(this, this.props.id)} />
				</td>
				<td>
					<strong className="itemPrice">${this.props.price.toFixed(2)}</strong>				
				</td>
				<td>
					<strong className="itemTotal">${this.state.itemTotal.toFixed(2)}</strong>	
				</td>
				<td>
					<button type="button" className="am-btn am-btn-danger" onClick={this.props.removeItem.bind(this, this.props.id)}>
							<span className="fa fa-trash"></span> Remove
					</button>	
				</td>
			</tr>
        );
    }
}