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

  const [outcome2, setOutcome2] = useState('')

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setQuestion(target.value)
    console.log('Question is', question)
    console.log("rendered Question", renderedQuestion)

  }




 

  const chooseAnswer = () => {
    let randomNumber: number = Math.trunc(Math.random() * 10);

    let outcome = (): string => {
        switch (randomNumber) {
            case 1:
                return "My heart says yes, indeed!";
            case 2:
                return "Absolutely no.";
            case 3:
                return "Even the very wise cannot see all ends.";
            case 4:
                return "Perhaps.";
            case 5:
                return "Yes indeed, it has been revealed to me.";
            case 6:
                return "I do not want to think about it.";
            case 7:
                return "Absolutely, yes.";
            case 8:
                return "I do not think so.";
            case 9:
                return "Hell yeah!";
            default:
                return "Hmm, I am a bit busy at the moment.";
        }
    };
   
    setOutcome2(outcome);
    
};

const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setRenderedQuestion(question)
  console.log('button clicked')
  setshowInput(false)
  chooseAnswer()  

}


  return (
    <>

      <h1>App</h1>



      <Header />
      {showInput && <Question inputHandler={inputHandler} clickHandler={clickHandler} />}

      <Answer renderedQuestion={renderedQuestion} outcome2={outcome2}/>

    </>
  )
}

export default App
