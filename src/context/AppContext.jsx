import React from "react";
import { fetchData } from '../assets/fetchData';
import { API_KEY } from '../assets/API_KEY'

// * Contexto
const AppContext = React.createContext();

// !
function AppProvider(props) {
    // * BASE URL
    const BASE_URL = 'https://be-a-rym.up.railway.app/api/';

    //* Estado de characters 
    const [characters, setCharacters] = React.useState([]);
    // * Estado del value del input de Buscar
    const [ searchInput, setSearchInput ] = React.useState('');
  
    // * Modificar el estado de la cards
    // * Agg o Remover Cards
    const addCharacters = async (urlApi) => {
      try {
        const { image, name, species, gender, id } = await fetchData(urlApi);
        if (id <= 826) {
          let itIsAdded = characters.find(character => character.id === id);
  
          if(!itIsAdded){
            setCharacters([ { id, image, name, species, gender }, ...characters ])
          }
        }
      } catch (error) {
          console.error(error);
      }
    }
  
    // * Eliminar a card de la lista de characters
    const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== id))
    }

    return(
      <AppContext.Provider value={{
        characters,
        setCharacters,
        searchInput,
        setSearchInput,
        addCharacters,
        onClose,
        BASE_URL,
        API_KEY,
        fetchData
      }}>
        {props.children}
      </AppContext.Provider>
    )
}
// !

export { AppContext, AppProvider }