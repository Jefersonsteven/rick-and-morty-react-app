import './SearchBar.scss'
import React from 'react';
import { AppContext } from "../../context/AppContext";

function SearchBar() {
   const {searchInput, setSearchInput, addCharacters, BASE_URL, API_KEY} = React.useContext(AppContext);

   const onSearchValueChange = (event) => {
      setSearchInput(event.target.value);
   }


   return (
      <div className='SearchBar'>
         <input  
            onChange={onSearchValueChange} 
            value={searchInput} 
            className='SearchBar__input' 
            type='search' 
         />
         <button className='SearchBar__btn' onClick={() => {
            if(searchInput !== '' && !!Number(searchInput) && searchInput <= 826) {
               addCharacters(`${BASE_URL}character/${searchInput}?key=${API_KEY}`);
               setSearchInput('')
            } else if (!Number(searchInput) || searchInput > 826 ) {
               window.alert('Escribe un numero del 1 al 826')
            }
         }}>
               Add
         </button>
      </div>
   );
}

export { SearchBar } 