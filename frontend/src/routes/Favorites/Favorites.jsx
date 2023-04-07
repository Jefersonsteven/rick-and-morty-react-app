import './Favorites.scss';
import React, { Component, Fragment, useEffect } from 'react';
import { Nav } from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { orderCards, filterCards, getFavorites } from '../../redux/actions';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);

    async function a (ok) {
      return await ok.props.getFavorites()

    }
    a(this);
  }

  handleSortChange(event) {
    this.props.orderCards(event.target.value);
  }

  handleFilterChange(event) {
    this.props.filterCards(event.target.value);
  }

  render() {

    return (
      <Fragment>
        <div className="UI" >
          <Nav />
        </div>
        <div className='Favorites'>
          {this.props.allCharacters[0] && <div className='Favorites--filter-sort'>
            <select name="sort" className='Favorites--filter-sort__sort' onChange={this.handleSortChange}>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" className='Favorites--filter-sort__filter' onChange={this.handleFilterChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless ">Genderless </option>
              <option value="unknown">unknown</option>
            </select>
          </div>}
          <div className='Favorites-container' >
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
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderCards: (value) => dispatch(orderCards(value)),
    filterCards: (value) => dispatch(filterCards(value)),
    getFavorites: () => dispatch(getFavorites()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Favorites);