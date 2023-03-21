import './Card.scss'
import React, { useEffect, useState } from 'react';
import { IconClose } from '../Icons/IconClose';
import { Link } from "react-router-dom";
import { Heart } from '../Icons/Heart';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeOfFavorites } from '../../redux/actions';
import { useLocation } from 'react-router-dom';

function Card({ onClose, id, name, species, gender, image }) {
   const { pathname } = useLocation();
   const [ isFav, setIsFav ] = useState(false);
   const myFavorites = useSelector((state) => state.myFavorites);
   const dispatch = useDispatch();
   
   const handleFavorite = () => {
      if(isFav) {
         dispatch(removeOfFavorites(id));
         setIsFav(false);
      } else {
         dispatch(addToFavorites({id, name, species, gender, image}));
         setIsFav(true);
      }
   }

   useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         const element = myFavorites[i];
         if(element.id === id) {
            setIsFav(true);
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
               dispatch(removeOfFavorites(id));
            }}
            >
               <IconClose />
            </button>
         }
         <img  src={image} alt={name} />
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}


export { Card };
