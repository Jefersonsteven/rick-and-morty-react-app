import './Cards.scss'

import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import { AppContext } from "../../context/AppContext";
import { useDispatch } from 'react-redux';

function Cards() {
   const {characters, onClose} = React.useContext(AppContext);

   return (
      
      <div className='characteres-container'>
         {characters.map(({ id, name, origin, status, image, species, gender }) => <Card 
            key={id}
            id={id}
            name={name}
            origin={origin}
            status={status}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
         />)}
      </div>
   )
}


export { Cards }