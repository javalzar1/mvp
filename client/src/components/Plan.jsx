/* eslint-disable react/prop-types */
import React from 'react'
import LocationList from './LocationList.jsx'
import TripLists from './TripLists.jsx'
import styles from '../../styles/Plan.module.css'

class Plan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLocations: false,
      displayLists: false,
      locID: 0
    };
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.home = this.home.bind(this);
  }

  handleCreateClick() {
    this.props.handleLocationView()
    this.setState({
      displayLocations: !this.state.displayLocations
    })
  }

  handleLocationClick(index) {
    this.setState({
      locID: index,
      displayLists: !this.state.displayLists,
    })
  }

  home() {
    this.props.handleLocationView()
    this.setState({
      displayLocations: false,
    })
  }

  render() {
    const { list } = this.props;
    const { displayLocations, displayLists, locID } = this.state;

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

    const renderListsOrLocations = () => {
      if (displayLocations === true && displayLists === false) {
        return <LocationList
          list={list}
          locationClick={this.handleLocationClick}
          home={this.home}
        />
      } else if (displayLocations === false && displayLists === false) {
        return currentLocations;
      } else {
        return <TripLists
          list={list}
          locID={locID}
          className={styles.trip}
          locationClick={this.handleLocationClick}
        />
      }
    }

    return(
      // create a list button OR List of locations
      <div className={styles.main}>
        {renderListsOrLocations()}
      </div>
    )
  }
}

export default Plan;