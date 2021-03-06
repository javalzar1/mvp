/* eslint-disable react/prop-types */
import React from 'react'
import ListItem from './ListItem.jsx'

const LocationList = ({ list, locationClick, home}) => (
  <div>
    <button onClick={() => home()}>{'<'}</button>
    <ul>
      {list.map((item, index) => (
      <li key={index}>
        <ListItem
          item={item}
          locationClick={locationClick}
          index={index}
        />
      </li>
      ))}
    </ul>
  </div>
)

export default LocationList;