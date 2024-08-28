
import logoImg from '@/assets/game-logo.png'

export function GameLogo() {
  return (
    <div className='w-full flex justify-center'>
      <img 
        src={logoImg} 
        alt='Game Logo'
        className='w-64 object-cover rounded-full drop-shadow-2xl shadow-white'
      />
    </div>
  )
}