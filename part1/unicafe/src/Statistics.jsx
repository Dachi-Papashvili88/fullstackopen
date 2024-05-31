import StatisticLine from "./StatisticLine";
const Statistics = ({ good, neutral, bad }) => {
  const feedback = good + neutral + bad;

  if (feedback === 0) {
    return (
      <>
        <h1>statistics</h1>
        <h4>No feedback given</h4>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <h4>all {good + neutral + bad}</h4>
      <h4>
        average{" "}
        {(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad) || 0}
      </h4>
      <h4>positive {(good / (good + neutral + bad) || 0) * 100}%</h4>
    </>
  );
};

export default Statistics;
