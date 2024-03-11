interface QuestionProps {
  inputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Question(props: QuestionProps) {
  return (
    <>
      <form className="question-layout">
        <label className="text--big">
          Please enter your question:
          <input type="text" onChange={props.inputHandler} className="input" />
        </label>
        <button onClick={props.clickHandler} className="button">
          Find the future
        </button>
      </form>
    </>
  );
}

export default Question;
