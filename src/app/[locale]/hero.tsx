'use client'
import { useTranslations } from 'next-intl'
function Hero() {
  const t = useTranslations('')
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/bg_hero.png')] bg-cover bg-no-repeat">
      <div className='absolute inset-0 h-full w-full bg-gray-900/60' />
      <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent' />
      <div className='grid min-h-screen md:px-8'>
        <div className='container relative z-10 mx-auto my-auto'>
          <div className='px-8'>
            <h1 className='text-2xl font-semibold leading-[2rem] text-white md:max-w-full md:text-7xl md:leading-[5.488rem] lg:max-w-4xl lg:text-7xl lg:leading-[5.488rem]'>
              CARTENZ SATSET INDONESIA GASPOL
            </h1>

            <p className='mb-10 mt-8 w-full text-base font-light leading-7 text-white md:max-w-full md:text-2xl md:leading-[37.2px] lg:max-w-4xl'>
              {t('heroDescription')}
            </p>
          </div>
        </div>
      </div>

      <div className='container absolute bottom-0 left-0 right-0 z-10 hidden md:block'>
        <div className='flex flex-wrap justify-center gap-14 px-8 py-8 md:justify-between'>
          <div className=''>
            <img src='/image/logos/1Daerah.svg' alt='1daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/2Daerah.svg' alt='2daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/3Daerah.svg' alt='3daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/5Daerah.svg' alt='4daerah' />
          </div>
          <div className=''>
            <img src='/image/logos/5Daerah.svg' alt='5daerah' />
          </div>
          <div className='text-center text-white'>
            <h3 className='text-[3rem] font-semibold leading-[3.657rem] text-[#0199CB]'>
              170++
            </h3>
            <p className='text-[24px] leading-7'>{t('pemerintahDaerah')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
