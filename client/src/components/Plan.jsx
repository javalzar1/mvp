/* eslint-disable react/prop-types */
import React from 'react'
import LocationList from './LocationList.jsx'
import styles from '../../styles/Plan.module.css'

class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLocations: false,
      displayLists: false
    };
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
  }

  handleCreateClick() {
    this.setState({
      displayLocations: !this.state.displayLocations
    })
  }

  handleLocationClick() {
    alert('Location clicked!')
  }

  render() {
    const { list } = this.props;
    const { displayLocations, displayLists } = this.state;
    const currentLocations = (
      <div
        className={styles.container}
        onClick={this.handleCreateClick}
      >
        <div className={styles.text}>
          Select a Trip
        </div>
        <div className={styles.square}>
          <div className={styles.plus}>
            +
          </div>
        </div>
      </div>
    );
    return(
      // create a list button OR List of locations
      <div className={styles.main}>
        {displayLocations ?
        <LocationList
          list={list}
          locationClick={this.handleLocationClick}
        />
        : currentLocations}
      </div>
      // once a user selects a location  a subset of lists appear
    )
  }
}

export default Plan;