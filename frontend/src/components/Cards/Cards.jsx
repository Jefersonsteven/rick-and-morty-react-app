import './Cards.scss'

import React, { useEffect } from 'react';
import { Card } from '../Card/Card';
import { AppContext } from "../../context/AppContext";
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions';

function Cards() {
   const {characters, onClose} = React.useContext(AppContext);
   const dispatch = useDispatch();

   // useEffect(() => {
   //    dispatch(getFavorites());
   // },[])

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