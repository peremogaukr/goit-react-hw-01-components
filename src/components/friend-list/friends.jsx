import PropType from 'prop-types';
import css from './Styles-List.module.css';

import { FreindsListItem } from 'components/Friend-list-item/Friend.list.item';

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