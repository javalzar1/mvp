/* eslint-disable react/prop-types */
import React from 'react'
import styles from '../../styles/List.module.css'

const ListItem = ({ item, locationClick }) => (
  <div
    className={styles.list}
    onClick={() => locationClick()}
  >
    {item.location}
  </div>
)

export default ListItem;