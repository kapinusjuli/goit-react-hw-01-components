import PropTypes from "prop-types";
import {
  ProfileStyle,
  Description,
  Name,
  Tag,
  Location,
  Avatar,
  Stats,
  Label,
  Quantity,
} from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileStyle>
      <Description>
        <Avatar src={avatar} alt={username} className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <li>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{stats.followers}</Quantity>
        </li>
        <li>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{stats.views}</Quantity>
        </li>
        <li>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{stats.likes}</Quantity>
        </li>
      </Stats>
    </ProfileStyle>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
