import { useMemo, useState } from "react";
import { CartAction, CartDispatch, CartList } from "../lib/Cart";
import { getProductById } from '../lib/Products';
import CartControls from './CartControls';

interface IProps {
    cartList: CartList;
    cartDispatch: CartDispatch;
}

function Cart({ cartList, cartDispatch }: IProps) {

    const [cartTotal, setCartTotal] = useState(0);

    const cartElements = useMemo(() => {
        let total = 0;

        const elements = cartList.map(item => {
            const product = getProductById(item.id);
            if(!product) {
                return <li>Item no longer exists!</li>
            }
            total += item.count * product.price;
            return (
                <li key={product.id} className="mb-4">
                    <div className="mb-2 flex flex-row flex-wrap">
                        <strong className="mr-4">{product.name}</strong>
                        <span>{item.count} x {product.price} = {(item.count * product.price).toFixed(2)}</span>
                    </div>
                    <CartControls productId={item.id} cartDispatch={cartDispatch} />
                </li>
            );
        });

        setCartTotal(total);

        return elements;
    }, [cartList, cartDispatch])

    const checkout = () => {
        if(cartList.length) {
            cartDispatch({ type: CartAction.EMPTY_EVERYTHING, payload: { id: 0, count: 0 } });
            alert('Thankyou for shopping with us!')

            //axios.post('serveraddress').then(res => router.push('/order-confirmed').catch(err => setError(res.data.err));
        }
    }

    return (
        <div className="bg-purple-700 shadow h-full overflow-y-auto border-t-4 lg:border-l-4 border-purple-800 text-lg text-white p-4 flex flex-col">
            <strong className="underline mb-4">CART</strong>
            <ul>{cartElements}</ul>
            <div className="mt-auto mb-4 border-y-2 border-current flex flex-row justify-between">
                <span className="mr-auto">Total</span>
                <span className="ml-auto">= {cartTotal.toFixed(2)}</span>
            </div>
            <button className="rounded shadow-sm text-white bg-green-500" onClick={() => checkout()}>Checkout</button>
        </div>
    );
}

export default Cart;
