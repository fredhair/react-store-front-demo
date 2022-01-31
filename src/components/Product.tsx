import React from 'react';
import { CartDispatch } from '../lib/Cart';
import { IProduct } from '../lib/Products';
import CartControls from './CartControls';

interface IProps {
    product: IProduct;
    cartDispatch: CartDispatch;
}

function Product({ product, cartDispatch }: IProps) {
    return (
        <div className="rounded shadow-sm bg-purple-900 text-white p-2">
            <div className="flex flex-col gap-2 items-center h-full justify-between">
                <div>
                    <span className="text-lg font-bold">{product.name}</span>
                    {' - '}
                    <span className="mt-2">£{product.price.toFixed(2)}</span>
                </div>
                <p className="my-2">{product.description}</p>
                <p className="my-2">EAN - {product.barcode}</p>
                <CartControls hideRemoveButton hideRemoveAllButton productId={product.id} cartDispatch={cartDispatch} />
            </div>
        </div>
    );
}

export default Product;
