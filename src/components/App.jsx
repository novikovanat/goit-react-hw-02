import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const [option, setOpions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = Object.values(option).reduce(
    (total, value) => (total = value + total),
    0
  );

  const positiveFeedback = Math.round((option.good / totalFeedback) * 100);

  function clickHandler(e) {
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
      case "reset":
        setOpions({ good: 0, neutral: 0, bad: 0 });
        break;
    }
  }

  return (
    <div>
      <Description></Description>
      <Options handler={clickHandler}></Options>
      {totalFeedback === 0 ? <Notification></Notification>:
      <Feedback values={[option, totalFeedback, positiveFeedback]}></Feedback>}
    </div>
  );
};

export default App;
