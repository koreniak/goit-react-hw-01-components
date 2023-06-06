import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsItems } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsItems>
      {friends.map(({id, avatar, name, isOnline}) => <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />)}
    </FriendsItems>
)
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })),
};