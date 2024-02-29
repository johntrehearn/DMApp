import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Answer from './components/Answer'
import RenderedQuestion from './components/RenderedQuestion'
import { render } from 'react-dom'




function App() {
  //const [count, setCount] = useState(0)



  // const [renderedAnswer, setRenderedAnswer] = useState('')

  // set the question
  const [question, setQuestion] = useState('')

  // set whether the questions

  const [renderedQuestion, setRenderedQuestion] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setQuestion(target.value)
    console.log('Question is', question)


    console.log("rendered Question", renderedQuestion)
  }


  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRenderedQuestion(question)

    console.log('button clicked')
    if (renderedQuestion === 'YES') {
      {
        renderedQuestion && (
          <div>
            <h2>Your Question was:</h2>
            <p>{question}</p>
          </div>
        )
      }

    } else {
      console.log("NOPE")
    }


  }
  return (
    <>

      <h1>App</h1>

      <Header />
      <RenderedQuestion inputHandler={inputHandler} clickHandler={clickHandler} />
      <Answer renderedQuestion={renderedQuestion} />

    </>
  )
}

export default App
