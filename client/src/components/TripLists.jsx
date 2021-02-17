/* eslint-disable react/prop-types */
import React from 'react';
import styles from '../../styles/TripLists.module.css'

const TripLists = ({ list, locID }) => {
  const index = locID;
  return(
    <div className={styles.main}>
      {console.log(index, list[index])}
      test
    </div>
  )
};

export default TripLists;