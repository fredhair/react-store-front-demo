import Product from './Product';
import { CartDispatch } from '../lib/Cart';
import { useContext } from 'react';
import ProductContext from './ProductContext';
import { IProduct } from '../lib/Products';

interface IProps {
    query?: string;
    cartDispatch: CartDispatch;
}

function ProductList(props: IProps) {

    const Products = useContext(ProductContext);

    const filterProducts = (query: string): Array<IProduct> => {
        return Products;
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
