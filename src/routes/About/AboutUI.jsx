import React, { Fragment } from "react";
import { Nav } from '../../components/Nav/Nav';
import './AboutUI.scss';
import { Link } from "react-router-dom";



function AboutUI() {
  const aboutgame = `Una web creada con React y la API de Rick and Morty es una plataforma en línea que ofrece información detallada sobre los personajes, episodios y lugares presentados en la serie. Los usuarios pueden buscar y filtrar fácilmente la información según sus intereses y preferencias. La página principal presenta una lista de elementos destacados con imágenes y descripciones breves, y los usuarios pueden hacer clic en cada uno para ver más detalles, como una imagen más grande, información sobre su historia y personalidad, episodios en los que aparece y lugares que ha visitado. Además, se proporcionan herramientas de búsqueda avanzada y elementos interactivos para mantener a los usuarios involucrados y fomentar la participación. En resumen, la web es una plataforma informativa y entretenida para los fanáticos de Rick and Morty.`;
  const githubgame = 'https://github.com/Jefersonsteven/rick-and-morty-react-app'
  const aboutme = `Soy Jeffer Steven Nuñez, un desarrollador Full Stack con experiencia en varios proyectos. Mi portafolio presenta algunos de mis trabajos utilizando las últimas tecnologías. Mi objetivo es crear soluciones efectivas y atractivas que impacten positivamente la vida de las personas. Gracias por visitar mi portafolio.`;
  const githubme = 'https://github.com/Jefersonsteven';
  const linkedin = 'https://www.linkedin.com/in/jeffersonsteven/';

  return(
    <Fragment>
      <div className="AboutUI">

          <section className="AboutUI__game">
            <h2>Rick and Morty App with React</h2>
            <p>{aboutgame}</p>
            <a href={githubgame} target="_blank">Github</a>
          </section>

          <section className="AboutUI__me">
            <h2>About me</h2>
            <p>{aboutme}</p>
            <div>
                <a href={githubme} target="_blank">Github</a>
                <a href={linkedin} target="_blank">Linkedin</a>
            </div>
          </section>

      </div>
    </Fragment>
  )
}


export { AboutUI };