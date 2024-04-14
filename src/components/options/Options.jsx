import css from "../options/options.module.css";

export default function Options({updateFeedbackHandler,option,resetHandler,totalFeedbackValue}
  
) {
  const buttonList = Object.keys(option).map((key) => (
    <li key={key}>
      <button onClick={updateFeedbackHandler} name={key}>
        {key}
      </button>
    </li>
  ));

  return (
    <ul className={css.buttons}>
      {buttonList}
      {totalFeedbackValue>0 && (
        <li>
          {
            <button onClick={resetHandler} name="reset">
              Reset
            </button>
          }
        </li>
      )}
    </ul>
  )
}
