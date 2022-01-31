import Product from './Product';
import { CartDispatch } from '../lib/Cart';
import { useContext, useState } from 'react';
import ProductContext from './ProductContext';
import { IProduct } from '../lib/Products';
import Search from './Search';
import Fuse from 'fuse.js';
import CategoryPicker from './CategoryPicker';

interface IProps {
    cartDispatch: CartDispatch;
}

const fuseOptions = {
    includeScore: true,
    //threshold: 0.6,
    keys: ['name', 'barcode'],
};

function ProductList(props: IProps) {

    const [productSearch, setProductSearch] = useState('');
    const [productCategories, setProductCategories] = useState<string[]>([]);

    const Products = useContext(ProductContext);

    //Would have thought it would be GC'd but starting to doubt myself
    //Can always do this in an effect and return cleanup but I don't think this is an issue
    //in React for non global state. Angular has 2 way data flow which may make GC a bit different
    const fuse = new Fuse(Products, fuseOptions);

    const filterProducts = (): Array<IProduct> => {
        if (productSearch.trim() === '') {
            return Products;
        }

        let results: IProduct[] = [];
        fuse.search(productSearch).forEach(searchResult => {
            if (searchResult?.score ?? 1 > 0.1) {
                results.push(searchResult.item);
            }
        });
        return results;
    }

    const shownProducts = filterProducts().map(product => (
        <Product
            product={product}
            cartDispatch={props.cartDispatch}
            key={product.id}
        />
    ));

    return (
        <div>
            <div className="my-4">
                <Search searchCallback={setProductSearch} placeholder="Product name or barcode (EAN)" className="w-full px-2 py-1 rounded" />
                <CategoryPicker categories={productCategories} setCategories={setProductCategories} />
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {shownProducts}
            </div>
        </div>
    );
}

export default ProductList;
