
import playImg from '@/assets/btn-play.png'
import musicImg from '@/assets/btn-music.png'
import nomusicImg from '@/assets/btn-nomusic.png'

export function ActionButton({children, type = 'play'}) {
  return (
    <div className=''>
      <img 
        className='w-28 aspect-square rounded-full'
        src={
          type === 'play' ? playImg :
          type === 'music' ? musicImg :
          type === 'no-music' ? nomusicImg : ''
        }
      />
    </div>
  )
}