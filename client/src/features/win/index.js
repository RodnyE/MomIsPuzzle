export function WinnerPage() {
  return (
    <div className="flex h-screen justify-center items-center p-6 text-center">
      <div className='bg-white bg-opacity-60 rounded'>
        <h1 className="text-3xl font-bold">¡Felicidades! Has ganado!</h1>
        <p className="text-xl font-bold">
          Este juego es un regalo para mi madre, una mujer <span className="text-pink-500">inteligente</span>, <span className="text-pink-500">bella</span> y <span className="text-pink-500">alegre</span>. 
          Quiero expresarle todo mi cariño y agradecimiento por todo lo que ha hecho por mí. 
          Te quiero, mamá.
        </p>
      </div>
    </div>
  );
}