export default function Feedback({ handler, value }) {
  function Button({ value, name, handler }) {
    console.log(value);
    console.log(handler);
    console.log(name);
   

    return (
      <button onClick={handler} name={name}>
        {name}
      </button>
    );
  }

  return (
    <div>
      <Button handler={handler} value={value} name="good"></Button>
      {/* <Button name="Bad"></Button>
      <Button name="Neutral"></Button> */}
    </div>
  );
}
