import PropTypes from "prop-types";
import Stats from "../Statistics/Stats";

import { Statistic, Title, StatList, Iten } from "./Statistics.styled";

// import Data from "../data.json";

export default function Statistics({ items }) {
  return (
    <Statistic>
      <Title>Upload stats</Title>

      <StatList>
        {items.map((item) => (
          <Iten key={item.id}>
            <Stats label={item.label} percentage={item.percentage} />
          </Iten>
        ))}
      </StatList>
    </Statistic>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
