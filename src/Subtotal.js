import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            
                    <p>
                      Subtotal ({basket.length} items) : <strong>{`₹ ${getBasketTotal(basket)}`}</strong>
                    </p>
                   
                      <input type="checkbox"/> This order contains a gift 🎁
                
            
             
          
            <button>Proceed to Checkout</button>
            
        </div>
    );
}

export default Subtotal;