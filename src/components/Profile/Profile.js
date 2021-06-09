import React from 'react';
// import DefaultImg from "../../components/default.jpg";
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.description}>
      <div>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="200"
        />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.listStats}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.listStats}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.listStats}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

// Profile.defaultProps = {
//   avatar: DefaultImg,
// };

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
