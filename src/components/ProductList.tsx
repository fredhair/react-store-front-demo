import React from 'react';
import Product from './Product';
import { filterProducts } from '../lib/Products';

interface IProps {
    query: string;
    onAddToCart: AddToCartCallback
    onRemoveFromCart: RemoveFromCartCallback
}

function ProductList(props: IProps) {

    const shownProducts = filterProducts(props.query).map(product => (
        <Product 
            product={product}
            onAddToCart={props.onAddToCart}
            onRemoveFromCart={props.onRemoveFromCart}
        />
    ));

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shownProducts}
        </div>
    );
}

export default ProductList;
