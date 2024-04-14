import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Notification from "./notification2/Notification";

const App = () => {
  const [feedbackValues, setFeedbackValues] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedbackValue = Object.values(feedbackValues).reduce(
    (total, value) => (total = value + total),
    0
  );

  const positiveFeedback = Math.round(
    (feedbackValues.good / totalFeedbackValue) * 100
  );

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedbackValues));
  }, [feedbackValues]);

  function updateFeedbackHandler(event) {
    switch (event.currentTarget.name) {
      case "good":
        setFeedbackValues({ ...feedbackValues, good: feedbackValues.good + 1 });
        break;
      case "neutral":
        setFeedbackValues({
          ...feedbackValues,
          neutral: feedbackValues.neutral + 1,
        });
        break;
      case "bad":
        setFeedbackValues({ ...feedbackValues, bad: feedbackValues.bad + 1 });
        break;
    }
  }

  function resetHandler() {
    setFeedbackValues({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <Description />
      <Options
        updateFeedbackHandler={updateFeedbackHandler}
        resetHandler={resetHandler}
        feedbackValues={feedbackValues}
        totalFeedbackValue={totalFeedbackValue}
      />
      {totalFeedbackValue === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackValues={feedbackValues}
          totalFeedbackValue={totalFeedbackValue}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
};

export default App;
