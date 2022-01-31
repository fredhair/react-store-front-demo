import React, { useEffect, useReducer, useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { cartReducer } from './lib/Cart';
import axios from 'axios';
import { IProduct } from './lib/Products';
import ProductContext from './components/ProductContext';

function App() {

  //If this were a larger app I would possibly be using context for the cart,
  //as it is; there's not much complexity in this demo so it's not
  //too complicated to keep a track of.

  //I've used context for the complete product list (partially to demonstrate I know how to use React!) 
  //as instead of keep getting the products from server like you would in a real app;
  //I decided to just get them once and cache as I didn't have time to put in a full REST api over the weekend.
  //Also the way I store items in the cart is just using an ID rather than the whole product data.
  //This means I need to lookup the products. This could be done with REST calls which seems inefficient,
  //as does storing the product data in the product component AND the cart list. 
  //So I've got a global context of all the available products.
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  //You said I had to get it from a HTTP request, didn't mention anything about not caching the whole product list
  //and avoiding subsequent requests!
  useEffect(() => {
    axios.get('http://localhost:3001/products').then(data => setAllProducts(data.data));
  }, []);

  return (
    <div className='bg-purple-500 min-h-screen'>
      <div className="bg-purple-700 text-white shadow border-b-4 border-purple-800">
        <header className="text-center py-4">
          <h1 className="text-xl"><strong>Storefront Demo With React</strong> - By Danny Pendle</h1>
        </header>
      </div>
      <ProductContext.Provider value={allProducts}>
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
      </ProductContext.Provider>
    </div>
  );
}

export default App;
