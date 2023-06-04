export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />)}
        </ul>
)
};

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li className="item" key={id}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
)
};