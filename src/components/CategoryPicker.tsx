import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IProps {
    categories: string[];
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

function ProductCategoryPicker({ categories, setCategories }: IProps) {
    
    const [allCategories, setAllCategories] = useState([]);
    //Only run this once at startup. 
    //In prod you'd possibly do it if the product list changes depending on app
    useEffect(() => {
        //I know using hardcoded strings is bad practice. 
        //Usually I would put this as a constant probably in .env
        //I'm rushing through this though!
        //Also I could do this with async and use an IIFE in useEffect
        //but for simplicity this works just as well
        //I'd also use some error handling in production!!
        axios.get('http://localhost:3001/categories').then(all => setAllCategories(all.data));
    }, [setCategories]);

    const onCategoryCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const categoryIndex = categories.indexOf(e.target.name);
        if(e.target.checked && categoryIndex < 0) {
            setCategories([...categories, e.target.name])
        } else if(!e.target.checked && categoryIndex >= 0) {
            setCategories(categories.splice(categoryIndex, 1));
        }
    } 

    const categoryElements = allCategories.map(category => {
        return (
            <li>
                <label htmlFor={category}>{category}</label>
                <input type="checkbox" onChange={e => onCategoryCheckChange(e)} name={category} />
            </li>
        );
    });
    
    return (
        <ul>
            {categoryElements}
        </ul>
    );
}

export default ProductCategoryPicker;
