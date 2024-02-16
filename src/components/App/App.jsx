import Description from "../../Description";
import Feedback from "../../Feedback";
import Notification from "../../Notification";
import Options from "../../Options";
import css from "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";

const initialStatus = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getCurrentStatus = () => {
  const savedStatus = localStorage.getItem("current-status");
  return savedStatus !== null ? JSON.parse(savedStatus) : initialStatus;
};

export default function App() {
  const [status, setStatus] = useState(getCurrentStatus);

  useEffect(() => {
    localStorage.setItem("current-status", JSON.stringify(status));
  }, [status]);

  const totalFeedback = status.good + status.neutral + status.bad;

  const positiveFeedback = Math.round(
    ((status.good + status.neutral) / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setStatus({
      ...status,
      [feedbackType]: status[feedbackType] + 1,
    });
  };

  const resetStatus = () => {
    setStatus(initialStatus);
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetStatus}
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
