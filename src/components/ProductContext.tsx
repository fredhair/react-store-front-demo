import React from 'react';
import { IProduct } from '../lib/Products';

const ProductContext = React.createContext<IProduct[]>([]);

export default ProductContext;