import PropTypes from "prop-types";
import FriendListItem from "../FrienfList/FriendListItem";
import { FriendListStyle } from "./FriendList.styled";

function FriendList({ items }) {
  return (
    <FriendListStyle className="friend-list">
      {items.map((item) => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </FriendListStyle>
  );
}

export default FriendList;

FriendList.propTypes = {
  id: PropTypes.number,
};
