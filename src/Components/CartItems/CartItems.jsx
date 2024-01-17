import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/remove_icon.png';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
                <p></p>
            </div>
            <hr />
            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id}>
                            <div className="cartitems-format cart-items-format-main">
                                <img src={item.image} alt="" className='carticon-product-icon' />
                                <p>{item.name}</p>
                                <p>${item.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                                <p>${item.new_price * cartItems[item.id]}</p>
                                <img src={remove_icon} className='removeicon' onClick={() => { removeFromCart(item.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;  // Ensure to add a return statement for the cases when cartItems[item.id] is not greater than 0
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className='cartitmes-total-item'>
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className='cartitmes-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${0}</h3>
                    </div>
                <button>PROCEED TO CHECKOUT</button>

                </div>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code ,Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" name="" id="" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
