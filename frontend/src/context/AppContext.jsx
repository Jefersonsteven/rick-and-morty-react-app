import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from '../assets/fetchData';
import { API_KEY } from '../assets/API_KEY';

// * Contexto
const AppContext = React.createContext();

// !
function AppProvider(props) {
    // * BASE URL
    const BASE_URL = 'https://rick-and-morty-react-app-production.up.railway.app/';
    //const BASE_URL = 'http://localhost:3001/';

    //* Estado de characters 
    const [characters, setCharacters] = React.useState([]);
    // * Estado del value del input de Buscar
    const [ searchInput, setSearchInput ] = React.useState('');
  
    // * Modificar el estado de la cards
    // * Add Cards
    const addCharacters = async (urlApi) => {
      try {
        const { id, name, origin, status, image, species, gender } = await fetchData(urlApi);
        if (id <= 826) {
          let itIsAdded = characters.find(character => character.id === id);
          if(!itIsAdded){
            setCharacters([ { id, name, origin, status, image, species, gender }, ...characters ])
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

    // * simula una base de datos que contiene username y password
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    
    const login = async (event, userData, message) => {
      event.preventDefault();
      const user = userData.username;
      const password = userData.password;
      const logginn = await fetchData(`${BASE_URL}api/v1/login`, {
        method: 'POST',
        headers: {  "Content-Type": "application/json" },
        body: JSON.stringify({ user, password })
      });
      
      if (userData.username != '' && userData.password != '') {
        if (logginn.access === true) {
          if (message.username === true && message.password === true) {
            event.preventDefault();
            setAccess(true);
            navigate('/home');
          }
        };
      }
    }

    useEffect(() => {
      !access && navigate('/')
    }, [access])

    // * simula cerrar secion
    const logout = () => [
      navigate('/')
    ]

    // !! outlet 

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
        fetchData,
        login,
        logout
      }}>
        {props.children}
      </AppContext.Provider>
    )
}
// !

export { AppContext, AppProvider }