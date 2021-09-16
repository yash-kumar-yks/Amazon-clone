import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import Rating from '@material-ui/lab/Rating';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket ...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }
    const [value, setValue] = React.useState(2);
    <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  />

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">

                    <Rating name="read-only" value={rating} size="medium" readOnly />
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>

        </div>
    );
}

export default CheckoutProduct;