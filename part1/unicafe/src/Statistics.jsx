const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>statistics</h1>
      <h4>good {good}</h4>
      <h4>neutral {neutral}</h4>
      <h4>bad {bad}</h4>
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
