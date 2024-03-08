function Question(props: any) {
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
