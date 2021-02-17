/* eslint-disable react/prop-types */
import React from 'react'
import StopItems from './StopItems.jsx'

const Stops = ({ data }) => (
  <div>
    <div>
      Total Stops
      {' '}
      {data.stops.length}
    </div>
    <StopItems stops={data.stops} />
  </div>
)

export default Stops;