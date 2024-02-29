import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Answer from './components/Answer'
import Question from './components/Question'
import { render } from 'react-dom'


function App() {

  // set the question
  const [question, setQuestion] = useState('')

  // set whether the questions

  const [showInput, setshowInput] = useState(true)

  const [renderedQuestion, setRenderedQuestion] = useState('')

  const [renderInput, setRenderedInput] = useState('')

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
    setshowInput(false)

  }

  return (
    <>

      <h1>App</h1>



      <Header />
      {showInput && <Question inputHandler={inputHandler} clickHandler={clickHandler} />}

      <Answer renderedQuestion={renderedQuestion} />


    </>
  )
}

export default App
