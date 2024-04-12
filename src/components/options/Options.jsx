import { useState } from "react";

export default function Feedback() {
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
      {/* <Button type="Good" function={raseClick}></Button> */}
      <button onClick={clickHandler} name="good">
        Good:{option.good}
      </button>
      <button onClick={clickHandler} name="neutral">
        Neutral:{option.neutral}
      </button>
      <button onClick={clickHandler} name="bad">
        Bad:{option.bad}
      </button>
      <button onClick={clickHandler} name="reset">
        Reset
      </button>
    </div>
  );
}
