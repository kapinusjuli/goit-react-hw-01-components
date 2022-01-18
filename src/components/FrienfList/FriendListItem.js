import PropTypes from "prop-types";
import { Item, Avatar, Name, Status } from "./FriendList.styled";

// const FriendStatus = FriendisOnline(isOnline);

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Avatar src={avatar} alt={name} width="48"></Avatar>
      <Name isOnline={isOnline}>
        {name}
        {isOnline}
      </Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
