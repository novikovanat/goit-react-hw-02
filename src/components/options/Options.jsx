export default function Feedback({ handler, value }) {
  function Button({ value, name, handler }) {
    return (
      <button onClick={handler} name={name}>
        {name}
      </button>
    );
  }

  return (
    <div>
      <Button handler={handler} value={value} name="good"></Button>
      <Button handler={handler} value={value} name="bad"></Button>
      <Button handler={handler} value={value} name="neutral"></Button>
      <Button handler={handler} value={value} name="reset"></Button>
    </div>
  );
}
