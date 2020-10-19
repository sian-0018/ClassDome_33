import React from 'react'

export const SearchBox_33 = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='tc pa3 bw2 ba b--dashed b--dark-red bg-light-yellow br4' 
            type="search"
            placeholder="search demo"
            onChange={searchChange}/>
        </div>
    )
}

export default SearchBox_33;