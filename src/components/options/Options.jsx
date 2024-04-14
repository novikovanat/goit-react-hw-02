import css from "../options/options.module.css";

export default function Feedback({ values: [handler, option] }) {
  const buttonList = Object.keys(option).map((key) => (
    <li key={key}>
      <button onClick={handler} name={key}>
        {key}
      </button>
    </li>
  ));

  return <ul className={css.buttons}>{buttonList}
 </ul>;
}

