
import React, { Fragment, useContext, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { Nav } from '../../components/Nav/Nav';
import { AppContext } from "../../context/AppContext";
import '../UI.scss';

function DetailUI() {
  const { id } = useParams();

  const { BASE_URL, 
          API_KEY, 
          fetchData,
          characters,
          setCharacters
        } = useContext(AppContext);
        
  // useEffect( async () => {
  //   try {
  //     const {
  //       image,
  //       name,
  //       status,
  //       species,
  //       gender,
  //       origin,
  //       location
  //     } = await fetchData(`${BASE_URL}character/${id}?key=${API_KEY}`);

  //     setCharacters([
  //       image, 
  //       name,
  //       status, 
  //       species, 
  //       gender, 
  //       origin, 
  //       location
  //     ])
  //   } catch (error) {
  //     console.log(error);
  //     window.alert(error);
  //   }
  // }, [id]);

  useEffect(() => {
    fetch(`${BASE_URL}character/${id}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacters(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    // return setCharacters({});
  }, [id]);
  
  return(
    <Fragment>
      <div className="UI" >
          <Nav/>
      </div>
      <div className="Detail">
        <div className="Detail__Image">
          <img src={characters.image} alt={characters.name} />
        </div>
        <div className="Detail__Info">
          <h2>
            {characters.name}
            <Link to={"/"}>Home</Link>
          </h2>
          <ul>
            <li><h3>STATUS:</h3>{characters.status}</li>
            <li><h3>SPECIE:</h3>{characters.species}</li>
            <li><h3>GENDER:</h3>{characters.gender}</li>
            <li><h3>ORIGIN:</h3>{characters.origin?.name}</li>
            <li><h3>LOCATION:</h3>{characters.location?.name}</li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}


export { DetailUI };