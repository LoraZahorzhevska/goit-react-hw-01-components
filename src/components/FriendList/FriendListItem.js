import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li class="item">
    {/* {isOnline ? <Span online /> : <Span />} */}
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </li>
);

// FriendListItem.defaultProps = {
//   url: DefaultImg,
// };

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};

export default FriendListItem;
