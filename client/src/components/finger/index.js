
import { useEffect, useRef, useState } from "react";
import './scanner.css'
import fingerImg from '@/assets/fingerprint.png'
import cx from "classix";

const statusList = [
  'Detectando huella',
  'Buscando en la base de datos',
  'Encontrado: Caridad León Calzadilla',
  'Obteniendo cualidades',
  'Instanciando juego',
  'Iniciando',
]

export function FakeFingerScanner({ onFinish }) {
  const intervalId = useRef(null);
  const [statusText, setStatusText] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const pointerDown = () => {
    setIsScanning(true);
  }
  const pointerUp = () => {
    setIsScanning(false);
    setStatusText(null)
  }

  useEffect(() => {
    if (!isScanning) {
      if (intervalId.current) clearInterval(intervalId.current);
      return;
    }

    let i = 0;
    setStatusText(statusList[i++]);
    intervalId.current = setInterval(() => {
      setStatusText(statusList[i++]);
      if (i > statusList.length - 1) {
        onFinish && onFinish();
        return clearInterval(intervalId.current);
      }
    }, 2000)

  }, [isScanning])

  return (
    <section className='relative flex flex-col items-center p-6 select-none'>
      <h1 className='text-red-700 p-3 text-center text-2xl font-bold bg-white rounded bg-opacity-50'>
        {statusText || 'Coloque su dedo'} ...
      </h1>
      <div 
        className={cx('relative h-36 scanner', isScanning && 'scanner-active')}
        onMouseDown={pointerDown}
        onMouseUp={pointerUp}
        onTouchStart={pointerDown}
        onTouchEnd={pointerUp}
      >
        <img
          src={fingerImg}
          alt='Finger Scanner'
          className='w-36 rounded-xl'
        />
        <div className='scanner-line'></div>
        <div className="absolute z-10 top-0 left-0 w-full h-full bg-transparent"></div>
      </div>

    </section>
  )
}