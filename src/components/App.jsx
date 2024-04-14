import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Notification from "./notification/Notification";

const App = () => {
  const [option, setOpions] = useState(() => {
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

  const totalFeedback = Object.values(option).reduce(
    (total, value) => (total = value + total),
    0
  );

  const positiveFeedback = Math.round((option.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(option));
  }, [option]);

  function updateFeedback(e) {
    let type = e.currentTarget.name;
    switch (type) {
      case "good":
        setOpions({ ...option, good: option.good + 1 });
        break;
      case "neutral":
        setOpions({ ...option, neutral: option.neutral + 1 });
        break;
      case "bad":
        setOpions({ ...option, bad: option.bad + 1 });
        break;
    }
  }

  function reset() {
    setOpions({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <>
      <Description></Description>
      <Options values={[updateFeedback, option, reset]}></Options>
      {totalFeedback === 0 ? (
        <Notification></Notification>
      ) : (
        <Feedback values={[option, totalFeedback, positiveFeedback]}></Feedback>
      )}
    </>
  );
};

export default App;
