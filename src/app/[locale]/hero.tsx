'use client'
import { useTranslations } from 'next-intl'
function Hero() {
  const t = useTranslations('')
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/bg_hero.png')] bg-cover bg-no-repeat">
      <div className='absolute inset-0 h-full w-full bg-gray-900/60' />
      <div className='grid min-h-screen px-8'>
        <div className='container relative z-10 mx-auto my-auto'>
          {/* @ts-ignore */}
          <h1 className='text-3xl font-black leading-[3rem] text-white md:max-w-full md:text-7xl md:leading-[5.488rem] lg:max-w-4xl lg:text-7xl lg:leading-[5.488rem]'>
            ADVANCING INDONESIA
          </h1>
          {/* @ts-ignore */}
          <p className='mb-10 mt-8 w-full font-poppins text-lg font-light leading-7 text-white md:max-w-full lg:max-w-4xl lg:text-2xl lg:leading-[37.2px]'>
            {t('heroDescription')}
          </p>
          {/* <div>
            <Button variant="gradient" color="white">
              ENROLL TODAY
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Hero
