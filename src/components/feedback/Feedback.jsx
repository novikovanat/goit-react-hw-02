export default function Feedback({ values }) {
  const feedbackList = Object.entries(values).map((value) => (
    <li key={value[0]}>
      <p>
        {value[0]}:<span>{value[1]}</span>
      </p>
    </li>
  ));

  const Paragraph = ({content}) => {
    return <p>{content}</p>;
  };

  return (
    <div>
      <ul>{feedbackList}</ul>
      <Paragraph content = "Total"></Paragraph>
      <Paragraph content = "Positive"></Paragraph>
    </div>
  );
}
