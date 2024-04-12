export default function Feedback({ handler }) {
  function Button({ name, handler }) {
    return (
      <button onClick={handler} name={name}>
        {name}
      </button>
    );
  }

  return (
    <div>
      <Button handler={handler} name="good"></Button>
      <Button handler={handler} name="bad"></Button>
      <Button handler={handler} name="neutral"></Button>
      <Button handler={handler} name="reset"></Button>
    </div>
  );
}
