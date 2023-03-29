import './SearchBar.scss'
import React from 'react';
import { AppContext } from "../../context/AppContext";

function SearchBar() {
   const {searchInput, setSearchInput, addCharacters, BASE_URL, characters} = React.useContext(AppContext);

   const onSearchValueChange = (event) => {
      setSearchInput(event.target.value);
   }

   const addCharcatersSetInput = () => {
      if(searchInput !== '' && !!Number(searchInput) && searchInput <= 826) {
         let itIsAdded = characters.find(character => character.id === searchInput);
         if(!itIsAdded) {
            addCharacters(`${BASE_URL}/api/v1/characters/${searchInput}`);
         }
         setSearchInput('')
      } else if (!Number(searchInput) || searchInput > 826 ) {
         window.alert('Escribe un numero del 1 al 826')
      }
   }


   return (
      <div className='SearchBar'>
         <input  
            onChange={onSearchValueChange} 
            value={searchInput} 
            className='SearchBar__input' 
            type='search'
            onKeyDown={(event) => {
               if(event.key === "Enter") {
                  addCharcatersSetInput();
               }
            }}

         />
         <button className='SearchBar__btn' onClick={() => {
            addCharcatersSetInput();
         }}>
               Add
         </button>
      </div>
   );
}

export { SearchBar } 