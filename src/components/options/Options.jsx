import css from '../options/options.module.css'

export default function Feedback({ values: [handler, total] }) {
  function Button({ name, handler }) {
    return (
      <button onClick={handler} name={name}>
        {name}
      </button>
    );
  }

  return (
    <div className={css.buttons}>
      <Button handler={handler} name="good"></Button>
      <Button handler={handler} name="bad"></Button>
      <Button handler={handler} name="neutral"></Button>
      {total > 0 && <Button handler={handler} name="reset"></Button>}
    </div>
  );
}
