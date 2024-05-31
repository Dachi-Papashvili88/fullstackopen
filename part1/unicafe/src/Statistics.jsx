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
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={feedback} />
          <StatisticLine
            text="average"
            value={(good * 1 + neutral * 0 + bad * -1) / feedback}
          />
          <StatisticLine
            text="positive"
            value={`${(good / feedback) * 100}%`}
          />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
