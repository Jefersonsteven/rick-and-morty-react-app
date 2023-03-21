import './Favorites.scss';
import React, { Component, Fragment } from 'react';
import { Nav } from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className="UI" >
          <Nav />
        </div>
        <div className='Favorites'>
          {this.props.myFavorites?.map(({ id, name, species, gender, image }) => {
            return <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={false}
            />
          })}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


export default connect(mapStateToProps, null)(Favorites);
// export { Favorites };