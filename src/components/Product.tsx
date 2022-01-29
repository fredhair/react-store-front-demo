import React from 'react';
import { AddToCartCallback, RemoveFromCartCallback } from '../lib/Cart';
import { IProduct } from '../lib/Products';

interface IProps {
    product: IProduct;
    onAddToCart: AddToCartCallback
    onRemoveFromCart: RemoveFromCartCallback
}

function Product({ product: {id, name, price, category, barcode, description } }: IProps) {
    return (
        <div className="rounded shadow-sm bg-gray-200 p-2">
            <div className="flex flex-col text-center">
                <div>
                    <span className="text-lg font-bold">{name}</span>
                    {' - '}
                    <span className="mt-2">£{price}</span>
                </div>
                <p className="mt-2">{description}</p>
            </div>
        </div>
    );
}

export default Product;
