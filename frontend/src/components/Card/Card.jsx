import './Card.scss'
import React, { useEffect, useState } from 'react';
import { IconClose } from '../Icons/IconClose';
import { Link } from "react-router-dom";
import { Heart } from '../Icons/Heart';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeOfFavorites, getFavorites } from '../../redux/actions';
import { useLocation } from 'react-router-dom';

function Card({ onClose, id, id_api, name, origin, status, image, species, gender }) {
   const { pathname } = useLocation();
   const [ isFav, setIsFav ] = useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();
   
   const handleFavorite = () => {
      if(isFav) {
         if (pathname === '/home') {
            const character = myFavorites.find(element => element.id_api === id);
            dispatch(removeOfFavorites(character.id));
         } else {
            dispatch(removeOfFavorites(id));
         }
         setIsFav(false);
      } else {
         console.log('add');
         dispatch(addToFavorites({ id, name, origin, status, image, species, gender }));
         setIsFav(true);
      }
   }

   useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         if(myFavorites.length > 0) {
            const element = myFavorites[i];
            if(element.name === name) {
               setIsFav(true);
            }
         }
      }
   }, [myFavorites]);

   return (
      <div className='card'>
         <button className={`${isFav}`} onClick={handleFavorite}>
            <Heart />
         </button>
         {pathname === '/home' &&
            <button onClick={() => {
               onClose(id);
            }}
            >
               <IconClose />
            </button>
         }
         <img  src={image} alt={name} />
         {pathname === '/home' && <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>}
         {pathname === '/favorites' && <Link to={`/detail/${id_api}`}>
            <h2>{name}</h2>
         </Link>}
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}


export { Card };
