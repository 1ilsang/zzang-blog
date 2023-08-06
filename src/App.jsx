import { atom, useAtom } from "jotai";

const counterAtom = atom(0);

const App = () => {
  const [counter, setCounter] = useAtom(counterAtom);

  const isNumber1 = (number) => number === 1;

  const handleButtonClick123 = () => {
    if (isNumber1(counter)) {
      setCounter(0);
      return;
    }
    setCounter((prev) => prev + 1);
  };

  return (
    <button onClick={handleButtonClick123}>Hello, World! {counter}</button>
  );
};

export default App;
