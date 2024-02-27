import React, { ChangeEvent, useState } from 'react';

function Answer() {

    const [question, setQuestion] = useState('')

    /*  function displayQuestion() {
         console.log('FULL question:', question)
     } */

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setQuestion(target.value)
        console.log("TTTT", question)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('button clicked')
        setRendererQuestion(question)
        //displayQuestion()

    }

    const [renderedQuestion, setRendererQuestion] = useState('')



    return (
        <>
            <h1>This is a answer box</h1>
            <form>

                <label>
                    Please enter your question:
                    <input type="text" onChange={inputHandler} />

                </label>
                <button className='tell_me_the_answer' onClick={clickHandler}>
                    Find the future
                </button>
            </form>
            {/* <div>
                <p style={{ display: 'none' }}>{question}</p>

            </div> */}

            {renderedQuestion && (
                <div>
                    <h2>Your Question was:</h2>
                    <p>{renderedQuestion}</p>
                </div>
            )}
        </>
    )
}

export default Answer;