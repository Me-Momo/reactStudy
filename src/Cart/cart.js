import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import List from './components/list';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            qtyTotal: 0,
            priceTotal: 0,
            subTotal: 0,
            tax: 0.10,
            grandTotal: 0
        }
    }

    componentDidMount() {
        this.initData();
        this.handleSubTotal();
    }
  
    initData(){
        axios.get(`http://localhost:9999/cartItems`)
            .then(result => {
                this.setState({ items:result.data });
            }).catch(result=>{
                console.log(result);
            });
    }

    changeQty(itemId, qty) {
        let item = _.find(this.state.items, item => item.id === itemId);
        item.quantity = qty;

        this.setState({
            qtyTotal: this.state.qtyTotal + item.quantity
        });
        this.setState({
            priceTotal: this.state.priceTotal + item.price
        });

        this.handleSubTotal();
    }

    removeItem(itemId) {

        let items=[].filter.call(this.state.items,function(item){
            return item.id !== itemId;
        });
        this.setState({items: items},function(){
          this.handleSubTotal();
        });  
    }
    handleSubTotal(){
        let itemTotal=0;
        // NOTE：这里setState出现延时
        console.log(this.state.items);
        [].forEach.call(this.state.items, item => {
            itemTotal += item.price * item.quantity;
        });
        this.setState({subTotal: itemTotal});
        this.handleGrandTotal(itemTotal);
    }
    handleGrandTotal(subTotal) {
        this.setState({
            grandTotal: (this.state.tax * subTotal) + subTotal
        });
    }
    render() {
        return (
            <table className='am-table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <List
                    items={this.state.items}
                    removeItem={this
                    .removeItem
                    .bind(this)}
                    changeQty={this
                    .changeQty
                    .bind(this)}
                    handleSubTotal={this
                    .handleGrandTotal
                    .bind(this)}/>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>SubTotal:</td>
                        <td>${this
                                .state
                                .subTotal
                                .toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tax:</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>${this
                                .state
                                .grandTotal
                                .toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <a className="am-btn am-btn-warning" href="#">
                                <i className="am-icon-shopping-cart"></i>
                                &nbsp;继续购物
                            </a>
                        </td>
                        <td>
                            <a className="am-btn am-btn-warning" href="#">
                                <i className="am-icon-shopping-cart"></i>
                                &nbsp;结账
                            </a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}