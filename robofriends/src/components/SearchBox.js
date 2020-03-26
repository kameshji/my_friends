import React from 'react'

export const SearchBox = ({searchField , searchChange}) => {
    return (
        <div className='pa2 br4 bw-5'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type="text" 
            placeholder="wanna look-out..just type the name " 
            onChange={searchChange}
            ></input>
        </div>
    )
}

export default SearchBox;
