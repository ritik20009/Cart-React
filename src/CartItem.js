import React from 'react'

class CartItem extends React.Component {

    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
       // console.log('this' , this.state);
        // set state form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // set state form 2
        // if previous state required

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () =>{

        if(this.state.qty==0){
            return;
        }
        else{
            this.setState((prevState) =>{
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    }
    render() {
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>RS: {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3024/premium/3024515.png?token=exp=1652715521~hmac=d543e1ddd019b1c69cc1a1e65148774b" onClick={this.increaseQuantity}/>
                    <img alt="decrease" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/2740/premium/2740679.png?token=exp=1652715478~hmac=4dce72a4326d6308300f70205367fb21" onClick = {this.decreaseQuantity}/>
                    <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                </div>
            </div>
        );
    }
}




const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;