import PropType from 'prop-types';
import css from './styles-list.module.css';

import { FreindsListItem } from 'components/friend-list-item/friend.list.item';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FreindsListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

Friends.propType = {
  friend: PropType.array.isRequired,
};