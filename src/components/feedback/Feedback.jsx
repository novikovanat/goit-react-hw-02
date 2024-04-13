export default function Feedback({ values: [option, total, positiveFb] }) {
  console.log(option);
  console.log("total", total);

  const feedbackList = Object.entries(option).map((value) => (
    <li key={value[0]}>
      <p>
        {value[0]}:<span>{value[1]}</span>
      </p>
    </li>
  ));

  function Paragraph({ content, value }) {
    return (
      <p>
        {content}:<span>{value}</span>
      </p>
    );
  }

  return (
    <div>
      <ul>{feedbackList}</ul>
      <Paragraph content="Total" value={total}></Paragraph>
      <Paragraph content="Positive" value={positiveFb}></Paragraph>
    </div>
  );
}
