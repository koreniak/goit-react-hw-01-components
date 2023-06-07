import PropTypes from 'prop-types';
import { StatsSection, StatsTitle, StatsList, StatsItem, StatsLabel, Percentage } from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  const Items = stats.map(({id, label, percentage}) =>
    <StatsItem key={id} style={{backgroundColor: getRandomHexColor()}}>
      <StatsLabel>{label}</StatsLabel>
      <Percentage>{percentage}%</Percentage>
    </StatsItem>)

  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsList>{Items}</StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
};
