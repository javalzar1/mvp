/* eslint-disable react/prop-types */
import React from 'react'
import Stops from './Stops.jsx'
import styles from '../../styles/Flight.module.css'
import moment from 'moment'

const Flight = ({ data }) => (
  <div>
    <div className={styles.locations}>
      {data.origin}
      {'→'}
      {data.destination}
    </div>
    <div>
      <div className={styles.space}>
        {moment(data.departureTime, 'HH:mm').format('hh:mm a')}
        {'  -  '}
        {moment(data.arrivalTime, 'HH:mm').format('hh:mm a')}
      </div>
      <div className={styles.space}>
        {' Flight Time: '}
        {data.totalTime}
      </div>
    </div>
    <Stops />
  </div>
)

export default Flight;