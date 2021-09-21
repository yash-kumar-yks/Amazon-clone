import { Button } from '@material-ui/core';
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating';
function Product({ id, title, image, price, rating }) {
  const [basket, dispatch] = useStateValue();
  const addToBasket = () => {
   
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  };
  const [value, setValue] = React.useState(2);
  <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">

          <Rating name="read-only" value={rating} size="medium" readOnly />

        </div>

      </div>
      <img src={image} alt="" />
      
        <Button size="small" onClick={addToBasket} >Add to basket</Button>
    
    </div>
  )
}

export default Product