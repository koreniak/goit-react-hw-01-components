import PropTypes from 'prop-types';
import { VscCircleFilled } from 'react-icons/vsc';
import { FriendItem, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem status={isOnline}>
      <VscCircleFilled></VscCircleFilled>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};