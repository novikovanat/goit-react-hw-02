import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Opinions from "./options/Options"
const App = () => {
  const [opinions, setOpinions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description></Description>
      <Feedback></Feedback>
      <Opinions></Opinions>
    </div>
  );
};

export default App;
