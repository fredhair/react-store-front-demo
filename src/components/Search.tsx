import React from 'react';

interface IProps {
    searchCallback: React.Dispatch<React.SetStateAction<string>>;
    label?: string;
}

function Search({ searchCallback, label = 'Search', ...props }: IProps & React.HTMLAttributes<HTMLInputElement>) {
    return (
        <div>
            <label className="text-white" htmlFor="search">{label}</label>
            <input type="text" name="search" {...props} onChange={e => searchCallback(e.target.value)} />
        </div>
    );
}

export default Search;
