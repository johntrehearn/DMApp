import React, { ChangeEvent, useState } from 'react';

function Answer() {

    const [question, setQuestion] = useState('')

    function displayQuestion() {
        console.log('FULL question:', question)
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setQuestion(target.value)
        console.log("TTTT", question)
    }

    const click_button = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('button clicked')
        displayQuestion();




    }



    return (
        <>
            <h1>This is a answer box</h1>
            <form>

                <label>
                    Please enter your question:
                    <input type="text" onChange={inputHandler} />

                </label>
                <button className='tell_me_the_answer' onClick={click_button}>
                    Find the future
                </button>
            </form>
            <div>
                <p>{question}</p>
            </div>
        </>
    )
}

export default Answer;