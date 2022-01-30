import Product from './Product';
import { filterProducts } from '../lib/Products';
import { CartDispatch } from '../lib/Cart';

interface IProps {
    query?: string;
    cartDispatch: CartDispatch;
}

function ProductList(props: IProps) {

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
