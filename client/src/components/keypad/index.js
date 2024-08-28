
import { useEffect, useState } from 'react';
import { includes } from 'lodash';
import cx from 'classix';
import './keypad.css'

const btnCtx = require.context('@/assets', true, /^btn_0[1-9]\.png$/);
const btnList = btnCtx.keys().map(btnCtx);

export const Keypad = ({ characters, value, onInput, onCancel }) => {
  const [input, setInput] = useState(value);
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    setInput(value);
    if (!value) setClicks([]);
  }, [value]);

  const handleButtonClick = (character, index) => {
    setInput(input + character);
    onInput(input + character);
    setClicks([...clicks, index]);
  };

  return (
    <div className="keypad w-full max-w-screen-sm bg-white bg-opacity-30">
      {characters.map((character, index) => (
        <button
          key={index}
          className={cx(
            'keypad-button',
            includes(clicks, index) && 'hidden'
          )}
          onClick={() => handleButtonClick(character, index)}
        >
          {character}
        </button>
      ))}
    </div>
  );
};