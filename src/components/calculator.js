import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = calculate(state, e.target.textContent);
    setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  return (
    <>
      <h1 className="calTitle">Let&apos;s do some math!</h1>
      <div className="container">
        <div className="result">{state.next || state.operation || state.total || 0}</div>
        <button type="button" onClick={handleClick} className="key">AC</button>
        <button type="button" onClick={handleClick} className="key">+/-</button>
        <button type="button" onClick={handleClick} className="key">%</button>
        <button type="button" onClick={handleClick} className="key yellow">÷</button>
        <button type="button" onClick={handleClick} className="key">7</button>
        <button type="button" onClick={handleClick} className="key">8</button>
        <button type="button" onClick={handleClick} className="key">9</button>
        <button type="button" onClick={handleClick} className="key yellow">x</button>
        <button type="button" onClick={handleClick} className="key">4</button>
        <button type="button" onClick={handleClick} className="key">5</button>
        <button type="button" onClick={handleClick} className="key">6</button>
        <button type="button" onClick={handleClick} className="key yellow">-</button>
        <button type="button" onClick={handleClick} className="key">1</button>
        <button type="button" onClick={handleClick} className="key">2</button>
        <button type="button" onClick={handleClick} className="key">3</button>
        <button type="button" onClick={handleClick} className="key yellow">+</button>
        <button type="button" onClick={handleClick} className="key zero">0</button>
        <button type="button" onClick={handleClick} className="key">.</button>
        <button type="button" onClick={handleClick} className="key yellow">=</button>
      </div>
    </>
  );
};

export default Calculator;
