function Answer(props: any) {

    const refreshPage = () => {
        window.location.reload();
    }
    return (
        <>

            {props.renderedQuestion && (
                <div>
                    <h2>Your Question was:</h2>
                    <p>{props.renderedQuestion}</p>
                    <h2>The universe says:</h2>
                    <p>{props.outcomeState}</p>
                    <button onClick={refreshPage}>Ask again</button> 
                </div>
            )}
        </>
    )
}

export default Answer;