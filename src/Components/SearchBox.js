import React from "react";

const SearchBox = ( {searchfield, searchChange} ) => {
    return(
        <div style= {{fontSize:25, fontWeight: 'bold' }} className='pa2'> 
           <input 
                  className ='pa3 ba b--green bg-lightest-blue' 
                  type = 'search' 
                  placeholder = 'search in Robots page' 
                  onChange = {searchChange}  
                  />
        </div>
    );
}

export default SearchBox;
