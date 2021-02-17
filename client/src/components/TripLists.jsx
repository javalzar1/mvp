/* eslint-disable react/prop-types */
import React from 'react';
import Flight from './Flight.jsx'
import styles from '../../styles/TripLists.module.css'

const TripLists = ({ list, locID, locationClick }) => {
  const info = list[locID];
  return(
    <div>
      <button onClick={() => locationClick()}>{'<'}</button>
      <div className={styles.main}>
        <div className={styles.location}>
          {info.location}
        </div>
        <div>
          <div className={styles.title}>
            Flight Info/Road Info
          </div>
          <br />
          <Flight data={info.flightInfo} list={list} id={locID} />
        </div>
        <div>
          <div className={styles.title}>
            Itenarary
          </div>
        </div>
        <div>
          <div className={styles.title}>
            Packing List
          </div>
        </div>
      </div>
    </div>
  )
};

export default TripLists;