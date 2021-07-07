import React from 'react';

export const Searchbar = ({ searchQuery, setSearchQuery }) => {
    const logoUrl =  process.env.PUBLIC_URL + '/images/pokeball.png';

    return (
        <div className="search-bar">
            <img src={logoUrl} alt="pokeball" className="logo"></img>
            <input type="search"
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)}>
            </input>
        </div>
    );
}