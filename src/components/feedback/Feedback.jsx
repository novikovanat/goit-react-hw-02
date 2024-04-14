export default function Feedback({
  values: [option, total, positiveFeedback],
}) {
  const feedbackList = Object.entries(option).map((value) => (
    <li key={value[0]}>
      <p>
        {value[0]}:<span>{value[1]}</span>
      </p>
    </li>
  ));

  return (
    <div>
      <ul>{feedbackList}</ul>
      <Paragraph content="Total" value={total}></Paragraph>
      <Paragraph content="Positive" value={positiveFeedback}></Paragraph>
    </div>
  );
}

function Paragraph({ content, value}) {
  return (
    <p>
      {content}:<span>{value}</span> {content==="Positive" && "%"}
    </p>
  );
}