function Answer(props: any) {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      {props.renderedQuestion && (
        <div>
          <h2 className="text--big">Your Question was:</h2>
          <p>{props.renderedQuestion}</p>
          <h2 className="text--big">The universe says:</h2>
          <p className="text--answer">{props.outcomeState.answer}</p>
          <button onClick={refreshPage} className="button">
            Ask again
          </button>
        </div>
      )}
    </>
  );
}

export default Answer;
