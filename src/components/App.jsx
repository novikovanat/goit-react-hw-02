import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";

const App = () => {
  const [option, setOpions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
      <Feedback values={option}></Feedback>
    </div>
  );
};

export default App;
