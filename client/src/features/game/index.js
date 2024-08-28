import React, { useState, useEffect } from 'react';
import { Engine } from './engine';
import { playAudio } from '../../utils';

import clickAudio from '@/assets/click.m4a'
import correctAudio from '@/assets/correct.m4a'
import winAudio from '@/assets/win.m4a'
import failAudio from '@/assets/fail.mp3'
import { Keypad } from '../../components/keypad';
import { WinnerPage } from '../win';

export function GamePage() {
  const [engine] = useState(new Engine());
  const [input, setInput] = useState('');
  const [chars, setChars] = useState([]);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    setChars(engine.getChars());
  }, [engine]);

  const handleInputChange = (value) => {
    playAudio(clickAudio)
    setInput(value);
  };

  const handleSubmit = (e) => {
    if (engine.checkWord(input)) {
      engine.nextLevel();
      setInput('');
      setChars(engine.getChars());

      if (engine.winner) {
        setWinner(true);
        playAudio(winAudio);
      }
      else playAudio(correctAudio)
    } 
    else {
      playAudio(failAudio);
      alert('Incorrecto!');
    }
  };

  const handleNextLevel = () => {
    engine.nextLevel();
    playAudio(correctAudio);
    setChars(engine.getChars());
  };

  if (winner) return <WinnerPage/>

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="m-6 w-full max-w-md p-4 bg-white bg-opacity-25 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4"> {input} </h1>
        <div className='w-full select-none *:cursor-pointer'>
          <Keypad
            characters={chars}
            value={input}
            onInput={handleInputChange}
          />
          <div className='flex p-3'>
            <div
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-fit"
            > Enviar </div>
            <div
              onClick={() => setInput('')}
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded w-fit"
            > Borrar </div>
          </div>
        </div>
      </div>
    </div>
  );
}