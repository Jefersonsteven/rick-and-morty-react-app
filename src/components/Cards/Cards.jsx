import './Cards.scss'

import React from 'react';
import Card from '../Card/Card';
import { AppContext } from "../../context/AppContext";

function Cards() {
   const {characters, onClose} = React.useContext(AppContext);
   return (
      
      <div className='characteres-container'>
         {characters.map(({ id, name, species, gender, image }) => <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
         />)}
      </div>
   )
}


export { Cards }