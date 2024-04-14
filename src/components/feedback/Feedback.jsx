export default function Feedback({
  feedbackValues,
  totalFeedbackValue,
  positiveFeedback,
}) {
  const feedbackList = Object.entries(feedbackValues).map((value) => (
    <li key={value[0]}>
      <p>
        {value[0]}:<span>{value[1]}</span>
      </p>
    </li>
  ));

  return (
    <div>
      <ul>{feedbackList}</ul>
      <Paragraph content="Total" value={totalFeedbackValue}></Paragraph>
      <Paragraph content="Positive" value={positiveFeedback}></Paragraph>
    </div>
  );
}

function Paragraph({ content, value }) {
  return (
    <p>
      {content}:<span>{value}</span> {content === "Positive" && "%"}
    </p>
  );
}
