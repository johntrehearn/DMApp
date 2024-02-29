import React, { useState } from 'react';

function Answer(props: any) {
    return (
        <>

            {props.renderedQuestion && (
                <div>
                    <h2>Your Question was:</h2>
                    <p>{props.renderedQuestion}</p>
                    <h2>The universe says:</h2>
                    <p>This is the answer</p>
                </div>
            )}
        </>
    )
}

export default Answer;