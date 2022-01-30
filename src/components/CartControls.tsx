import { useState } from 'react';
import { CartAction, CartDispatch } from "../lib/Cart";

interface IProps {
    productId: number;
    cartDispatch: CartDispatch;
    hideRemoveButton?: boolean;
    hideRemoveAllButton?: boolean;
}

function CartControls({ productId, cartDispatch, hideRemoveButton = false, hideRemoveAllButton = false, ...props }: IProps & React.HTMLAttributes<HTMLDivElement>) {

    const [count, setCount] = useState(1);

    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const min = parseInt(e.target.min);
        const max = parseInt(e.target.max);
        const value = parseInt(e.target.value);

        //if greater than max: set to max, if less than min or empty: set to min else set to input value
        value > max ? setCount(max) : isNaN(value) || value < min ? setCount(min) : setCount(value);
    }

    const removeFromCart = () => {
        cartDispatch({ type: CartAction.REMOVE, payload: { id: productId, count } });
    }

    const addToCart = () => {
        cartDispatch({ type: CartAction.ADD, payload: { id: productId, count } });
    }

    const removeAllFromCart = () => {
        cartDispatch({ type: CartAction.REMOVE_ALL, payload: { id: productId, count } })
    }

    return (
        <div {...props}>
            {!hideRemoveButton && <button title="Remove from Basket" className="bg-red-500 px-2" onClick={() => removeFromCart()}>-</button>}
            <input className="text-black pl-1" type="number" min={1} max={100} size={3} value={count} onChange={e =>  validateInput(e)} />
            <button title="Add to Basket" className="bg-green-500 px-2" onClick={() => addToCart()}>+</button>
            {!hideRemoveAllButton && <button title="Remove All from Basket" className="ml-2 bg-red-500 font-bold px-2" onClick={() => removeAllFromCart()}>&times;</button>}
        </div>
    );
}



export default CartControls;
