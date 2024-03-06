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
    let randomNumber: number = Math.trunc(Math.random() * 12);

    let outcome = (): string => {
        switch (randomNumber) {
            case 1:
                return "I don’t think you are ready to hear the answer to this one.";
            case 2:
                return "Yes!";
            case 3:
                return "No!";
            case 4:
                return "I guess so...";
            case 5:
                return "I very much doubt that.";
            case 6:
                return "Blablabla, this question bores me..";
            case 7:
                return "Zzzz… Huh? Oh sorry… Yeah sure, whatever.";
            case 8:
                return "My professional guess is: Yup!";
            case 9:
                return "Absolutely, I am so happy for you!";
                case 10:
                return "Absolutely, it saddens me greatly..";
                case 11:
                return "Hell yeah, you cheeky human ;)";
                case 12:
                  return "Naughty naughty.. I will never tell.";
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
