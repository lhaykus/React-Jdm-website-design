import { ShoppingBasketOutlined, Favorite } from '@material-ui/icons';
import React from 'react';
import './Product.css';

const Product = ({ item }) => {
    return (
        <div className='individual-product-container'>
            <div className='product-info'>
                <img src={item.img} className='product-img' />
                <div className='icon'>
                    <ShoppingBasketOutlined />
                </div>
                <div className='icon'>
                    <Favorite />
                </div>
            </div>


        </div>
    )
}

export default Product;