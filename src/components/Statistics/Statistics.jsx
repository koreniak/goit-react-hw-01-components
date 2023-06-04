export const Statistics = ({ title, stats }) => {
    const statsItem = stats.map(stat =>
        <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
        </li>)

    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">{statsItem}</ul>
        </section>
    );
    };