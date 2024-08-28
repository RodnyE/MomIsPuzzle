
import { useEffect } from 'react';
import { playAudio, preloadAudio, usePage } from './utils';
import { HomePage } from './features/home'
import bgMusic from './assets/bg.mp3'

preloadAudio(bgMusic);

function App() {
  const [page] = usePage();

  useEffect(() => {
    if (page === 'home') {
      const audio = playAudio(bgMusic);
      audio.loop = true;
      audio.volume = 0.5; 
    }
  }, [page])

  return (
    <div className="app">
      <HomePage/>
    </div>
  )
}

export default App;