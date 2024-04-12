import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";

const App = () => {
  // const [opinions, setOpinions] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  return (
    <div>
      <Description></Description>
      <Options></Options>
      <Feedback></Feedback>
    </div>
  );
};

export default App;
