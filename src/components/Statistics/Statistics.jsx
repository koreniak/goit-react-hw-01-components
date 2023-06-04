import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    const statsItem = stats.map(({id, label, percentage}) =>
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>)

    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">{statsItem}</ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};
