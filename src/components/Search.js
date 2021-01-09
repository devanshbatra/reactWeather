import React from 'react';

const Search = ({city, setCity, search, setSearch}) => {
    const getSearch = (e) => {
        setSearch(e.target.value);
    };

    const getCity = (e) => {
        
        e.preventDefault();
        setCity(search);
        setSearch('');
    };

    return (
        <form className="search-form" onSubmit={getCity} >
            <input type="text" className='search-bar' value={search} placeholder='Search for a city' onChange={getSearch} />
            <button className="search-button" type='submit' ><i className="fas fa-search"></i></button>
        </form>
    );
}

export default Search;