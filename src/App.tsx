import { useState } from 'react';
import Header from './components/Header';
import Answer from './components/Answer';
import Question from './components/Question';
import EightBall from './components/EightBall';

function App() {
  type outcomeType = {
    answer: string;
    emotion: 'happy' | 'sad' | 'neutral' | 'start';
  };

  // set the question
  const [question, setQuestion] = useState('');

  // set whether the questions

  const [showInput, setshowInput] = useState(true);

  const [renderedQuestion, setRenderedQuestion] = useState('');

  const [outcomeState, setOutcomeState] = useState<outcomeType>({ answer: '', emotion: 'start' });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setQuestion(target.value);
    console.log('Question is', question);
    console.log('rendered Question', renderedQuestion);
  };

  const chooseAnswer = () => {
    let randomNumber: number = Math.floor(Math.random() * 12) + 1;
    let outcome = (): outcomeType => {
      switch (randomNumber) {
        case 1:
          return { answer: 'I don’t think you are ready to hear the answer to this one.', emotion: 'neutral' }; // :|
        case 2:
          return { answer: 'Yes!', emotion: 'happy' }; // :)
        case 3:
          return { answer: 'No!', emotion: 'sad' }; // :(
        case 4:
          return { answer: 'I guess so...', emotion: 'neutral' }; // :|
        case 5:
          return { answer: 'I very much doubt that.', emotion: 'sad' }; // :(
        case 6:
          return { answer: 'Blablabla, this question bores me..', emotion: 'sad' }; // :(
        case 7:
          return { answer: 'Zzzz… Huh? Oh sorry… Yeah sure, whatever.', emotion: 'neutral' }; // :|
        case 8:
          return { answer: 'My professional guess is: Yup!', emotion: 'happy' }; // :)
        case 9:
          return { answer: 'Absolutely, I am so happy for you!', emotion: 'happy' }; // :)
        case 10:
          return { answer: 'Absolutely, it saddens me greatly..', emotion: 'sad' }; // :(
        case 11:
          return { answer: 'Hell yeah, you cheeky human ;)', emotion: 'happy' }; // :)
        case 12:
          return { answer: 'Naughty naughty.. I will never tell.', emotion: 'happy' }; // :)
        default:
          return { answer: 'Hmm, I am a bit busy at the moment.', emotion: 'neutral' };
      }
    };

    setOutcomeState(outcome);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (question === '') {
      alert('Please type a question.');
    } else {
      setRenderedQuestion(question);
      setshowInput(false);
      chooseAnswer();
    }
  };

  return (
    <>
      <Header />

      <EightBall face={outcomeState.emotion} />

      {showInput && <Question inputHandler={inputHandler} clickHandler={clickHandler} />}

      <Answer renderedQuestion={renderedQuestion} outcomeState={outcomeState} />
    </>
  );
}

export default App;
