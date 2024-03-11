# Decision Making App with React and TypeScript

## Team 1 - TypeScript Project

- This is a team project for React23S TypeScript Module for the Full Stack Web Developer Program.

- We have built a Magic 8-ball. 

- This takes a user input and uses a random number function to provide a response.

- The website dynamically changes depending on whether the response is positive / neutral or negative.

- Technology used: Vite & React, TypeScript

### TypeScript uses

- Interface to define types:

```ts
interface EightBallProps {
  face: string;
}
```

- Used type to define a custom type:

```js
type outcomeType = {
    answer: string;
    emotion: 'happy' | 'sad' | 'neutral' | 'start';
  };
```

- Used TypeScript Union to declare a a type that could be one of several distinct possibilities. In this case, the emotion variable can be either 'happy', 'sad', 'neutral', or 'start':

```js
type outcomeType = {
    answer: string;
    emotion: 'happy' | 'sad' | 'neutral' | 'start';
  };
```

- Use infered states for the state:

```ts
  const [question, setQuestion] = useState('');

  const [showInput, setshowInput] = useState(true);

  const [renderedQuestion, setRenderedQuestion] = useState('');
```

- Use React.ChangeEvent & React.MouseEvent for event types:

```ts
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setQuestion(target.value);
  };

```

- Used HTMLInputElement & HTMLButtonElement types:

```ts
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setQuestion(target.value);
  };

```

```ts

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
```



Find us on Github:

#### Dóra Tokai

https://github.com/tdora28

####  Bendik Pettersen 

https://github.com/BigBenxoxo

#### John Trehearn

https://github.com/johntrehearn



