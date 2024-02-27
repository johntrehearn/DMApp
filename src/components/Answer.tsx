import React, { useState } from 'react';

function Answer() {

    const [question, setQuestion] = useState('')

    function fullQuestion() {
        console.log('FULL question:', question)
    }

    const inputHandler = (e: Event) => {
        const target = e.target as HTMLInputElement;
        setQuestion(target.value)
        console.log("TTTT", question)
    }

    const click_button = (e: Event) => {
        e.preventDefault();
        console.log('button clicked')
        fullQuestion();




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
        </>
    )
}

export default Answer;