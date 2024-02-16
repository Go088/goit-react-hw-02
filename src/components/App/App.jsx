import Description from "../../Description";
import Feedback from "../../Feedback";
import Notification from "../../Notification";
import Options from "../../Options";
import css from "./App.module.css";
import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = status.good + status.neutral + status.bad;

  const positiveFeedback = Math.round(
    ((status.good + status.neutral) / totalFeedback) * 100
  );

  console.log(positiveFeedback);

  const updateFeedback = (feedbackType) => {
    setStatus({
      ...status,
      [feedbackType]: status[feedbackType] + 1,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        setStatus={setStatus}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          status={status}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </div>
  );
}
