import { useEffect } from "react";

export default function Feedback({ values }) {
  const feedbackList = Object.entries(values).map((value) => (
    <li key={value[0]}>
      <p>
        {value[0]}:<span>{value[1]}</span>
      </p>
    </li>
  ));

  function Paragraph({ content, object }) {
    console.log("content", content);
    console.log("obj", object);
    const totalFeedback = Object.values(object).reduce(
      (total, value) => ((total = value + total), 0)
    );
    return (
      <p>
        {content}:<span>{totalFeedback}</span>
      </p>
    );
  }


  return (
    <div>
      <ul>{feedbackList}</ul>
      <Paragraph content="Total" object={values}></Paragraph>
      <Paragraph content="Positive" object={values}></Paragraph>
    </div>
  );
}
