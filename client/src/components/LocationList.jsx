/* eslint-disable react/prop-types */
import React from 'react'
import ListItem from './ListItem.jsx'

const LocationList = ({ list, locationClick }) => (
  <div>
    <ul>
      {list.map((item, index) => (
      <li key={index}>
        <ListItem
          item={item}
          locationClick={locationClick}
        />
      </li>
      ))}
    </ul>
  </div>
)

export default LocationList;