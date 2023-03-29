
import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { Nav } from '../../components/Nav/Nav';
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import './DetailUI.scss';

function DetailUI() {
  const { id } = useParams();

  const [ characters, setCharacters ] = useState({})

  const { BASE_URL } = useContext(AppContext);
  useEffect(() => {
    axios(`${BASE_URL}/api/v1/characters/detail/${id}`)
      .then((char) => {
        if (char.data.name) {
          setCharacters(char.data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacters({});
  }, [id]);
  
  return(
    <Fragment>
      <div className="DetailUI">
        <div className="DetailUI__image">
          <img src={characters.image} alt={characters.name} />
        </div>
        <div className="DetailUI__info">
          <h2>
            {characters.name}
          </h2>
          <ul>
            {
              characters.name ? (
              <Fragment>
                <li><h3>STATUS:</h3>{characters.status}</li>
                <li><h3>SPECIE:</h3>{characters.species}</li>
                <li><h3>GENDER:</h3>{characters.gender}</li>
                <li><h3>ORIGIN:</h3>{characters.origin?.name}</li>
                <li><h3>LOCATION:</h3>{characters.location?.name}</li>
              </Fragment> ) : ( <h3>Loading...</h3> )
            }
          </ul>
        </div>
      </div>
    </Fragment>
  )
}


export { DetailUI };