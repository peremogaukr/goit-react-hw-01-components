import PropTypes from 'prop-types';
import css from './friend-list.module.css';

export const FreindsListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={css.item}>
        <span
          className={`${css.status} ${isOnline ? css.online : css.offline}`}
        >
          {isOnline}
        </span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

FreindsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};