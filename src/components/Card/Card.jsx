import './Card.scss'
import React from 'react';
import { IconClose } from '../Icons/IconClose';
import { Link } from "react-router-dom";

export default function Card({ onClose, id, name, species, gender, image }) {

   return (
      <div className='card'>
         <button onClick={() => onClose(id)}>
            <IconClose />
            
         </button>
         <img  src={image} alt={name} />
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}
