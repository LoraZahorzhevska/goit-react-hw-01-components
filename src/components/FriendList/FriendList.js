import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, avatar, isOnline, name }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
