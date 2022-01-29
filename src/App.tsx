import React, { useReducer } from 'react';
import ProductList from './components/ProductList';
import { AddToCartCallback } from './lib/Cart';

function App() {

  //If this were a larger app I would be using context for the cart,
  //as it is; I only really need to slightly nest the data so it's not
  //too complicated to keep a track of.

  const [state, dispatch] = useReducer(first, second, third);

  const addToCart: AddToCartCallback = (id: number, count: number) => {

  }

  return (
    <div>
      <div className="bg-purple-700 text-white">
        <header className="text-center py-4">
          <h1 className="text-xl">Storefront Demo With React</h1>
        </header>
      </div>
      <main>
        <div className="container mx-auto">
          <div className="my-4">
            <ProductList query=''></ProductList>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
