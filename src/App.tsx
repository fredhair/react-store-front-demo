import { useEffect, useReducer } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { cartReducer } from './lib/Cart';
import axios from 'axios';
import { IProduct } from './lib/Products';

let allProducts: Array<IProduct>;

function App() {

  //If this were a larger app I would be using context for the cart,
  //as it is; there's not much complexity in this demo so it's not
  //too complicated to keep a track of.

  const [cart, cartDispatch] = useReducer(cartReducer, []);

  //You said I had to get it from a HTTP request, didn't mention anything about not caching the whole product list!
  useEffect(() => {
    axios.get('http://localhost:3001/products').then(data => {allProducts = data.data; console.log(allProducts)});
  }, []);

  return (
    <div className='bg-purple-500 min-h-screen'>
      <div className="bg-purple-700 text-white shadow border-b-4 border-purple-800">
        <header className="text-center py-4">
          <h1 className="text-xl"><strong>Storefront Demo With React</strong> - By Danny Pendle</h1>
        </header>
      </div>
      <div className="flex flex-row flex-wrap h-full">
        <main className="w-full lg:w-3/4">
          <div className="container mx-auto">
            <div className="m-4">
              <ProductList cartDispatch={cartDispatch}></ProductList>
            </div>
          </div>
        </main>
        <aside className="w-full lg:w-1/4 lg:fixed inset-0 left-auto h-screen">
          <Cart cartList={cart} cartDispatch={cartDispatch} />
        </aside>
      </div>
    </div>
  );
}

export default App;
