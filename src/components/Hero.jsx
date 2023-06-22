import { useState } from 'react';
import Typewriter from 'typewriter-effect';

import Arrowdown from '../assets/arrow-down.png'
import Frflag from '../assets/frflag.png'
import Enflag from '../assets/enflag.png'

const Hero = () => {

  const [showContent, setShowContent] = useState(false);
  const handleButtonClick = () => {
    setShowContent(!showContent);
  };

  return (
    <section className='flex flex-col p-10 h-screen relative bg-gradient-to-b from-slate-900'>
      <div className='text-9xl pt-40 pb-28 flex justify-center xs:text-8xl' id='gradientcolor'>
        <Typewriter
        options={{
        strings: ['Hello.', 'Bonjour.', '你好.', 'Hola.', '.مرحباً', 'Привет.', 'Olá.', 'Halo.'],
        autoStart: true,
        loop: true,
        }}
        />
      </div>
      <div className='flex flex-col pl-[5%] mb-16 xxs:mb-5'>
        <span className='text-6xl pb-5 font-bold xs:text-3xl xxs:hidden mb-5'>
          Mohamed-Amine Touba,
        </span>
        <span className='text-3xl'>
          Développeur Web Full-Stack React
        </span>
      </div>
      <article className='flex flex-row justify-between p-[5%] space-x-5 relative'>
        <button className='border-2 rounded-lg h-40 xs:h-28 w-1/4 xs:w-1/2 flex justify-center items-center border-teal-300' onClick={handleButtonClick}>
        {showContent ? (
          <div className='flex space-x-10 xxs:space-x-5'>
            <img src={Frflag} alt="Drapeau de la France" className='w-14 xxs:w-10'/>
            <img src={Enflag} alt="Drapeau du Royaume-uni" className='w-14 xxs:w-10'/>
          </div>
        ) : (
          <p className='text-3xl text-teal-300 font-bold p-5 xs:text-xl'><span className='xxs:hidden'>Télécharger mon</span> CV</p>
        )}
        </button>
      </article>
      <button className='flex justify-center cursor-pointer xs:hidden'>
        <img src={Arrowdown} alt="flêche vers le bas" className='absolute bottom-0 pb-5'/>
      </button>
    </section>
  )
}

export default Hero