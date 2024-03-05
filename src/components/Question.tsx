import React, { useState } from 'react';



function Question(props: any) {






    return (
        <>

            <form>

                <label>
                    Please enter your question:
                    <input type="text" onChange={props.inputHandler} />

                </label>
                <button onClick={props.clickHandler}>
                    Find the future
                </button>
            </form>


        </>
    )
}

export default Question;
