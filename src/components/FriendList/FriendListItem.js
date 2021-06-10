import React from 'react';
// import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={styles.item} key={id}>
    <span className={isOnline ? styles.Online : styles.Offline}></span>
    <img src={avatar} alt={name} width="48" />
    <p>{name}</p>
  </li>
);

// FriendListItem.defaultProps = {
//   url: DefaultImg,
// };

export default FriendListItem;
