/* eslint-disable react/prop-types */
import React from 'react'

const StopItems = ({ stops }) => (
  <ul>
    {stops.map((stop, index) => (
      <li key={index}>
        {stop}
      </li>
    ))}
  </ul>
)

export default StopItems;