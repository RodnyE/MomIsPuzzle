import { useEffect } from 'react';
import { ActionButton, FakeFingerScanner, Footer, GameLogo } from '../../components';
import { playAudio, usePage } from '../../utils';
import { GamePage } from '../game';

import bgMusic from '@/assets/bg.mp3'

export function HomePage() {
  const [page, setPage] = usePage();

  if (page === 'game') {
    return <GamePage />;
  }

  return (
    <main className='w-full h-full flex flex-col justify-between'>
      <GameLogo />

      {page === 'welcome' && (
        <FakeFingerScanner onFinish={() => setPage('home')} />
      )}

      {page === 'home' && (
        <div
          className='animate-pulse flex flex-col self-center items-center py-16 transition transform hover:scale-125 hover:animate-none'
          onClick={() => {
            setPage('game');
            playAudio(bgMusic)
          }}
        >
          <ActionButton type='play'  />
        </div>
      )}
      <Footer/>
    </main>
  );
}