import PropTypes from "prop-types";
import { Label, Percentage } from "./Statistics.styled";

function Stats({ label, percentage }) {
  return (
    <div>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </div>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Stats;
