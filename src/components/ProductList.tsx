import Product from './Product';
import { CartDispatch } from '../lib/Cart';
import { useContext } from 'react';
import ProductContext from './ProductContext';
import { IProduct } from '../lib/Products';
import Fuse from 'fuse.js';

interface IProps {
    query?: string;
    cartDispatch: CartDispatch;
}

const fuseOptions = {
    includeScore: true,
    //threshold: 0.6,
    keys: ['name', 'barcode'],
};

function ProductList(props: IProps) {

    const Products = useContext(ProductContext);

    const fuse = new Fuse(Products, fuseOptions);

    const filterProducts = (query: string): Array<IProduct> => {
        if(query === '') {
            return Products;
        }
        
        let results: IProduct[] = [];
        fuse.search(query).forEach(searchResult => {
            if(searchResult?.score ?? 1 > 0.1) {
                results.push(searchResult.item);
            }
        });
        return results;
    }

    const shownProducts = filterProducts(props.query ?? "").map(product => (
        <Product
            product={product}
            cartDispatch={props.cartDispatch}
            key={product.id}
        />
    ));

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {shownProducts}
        </div>
    );
}

export default ProductList;
