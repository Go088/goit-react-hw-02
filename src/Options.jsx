export default function Options({ updateFeedback, total, setStatus }) {
  function resetValue() {
    setStatus({ good: 0, neutral: 0, bad: 0 });
  }
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 && <button onClick={resetValue}>Reset</button>}
    </div>
  );
}
