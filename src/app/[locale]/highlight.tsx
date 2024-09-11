'use client'
import { useTranslations } from 'next-intl'

// import FeatureCard from "@/components/feature-card";

export function Highlight() {
  const t = useTranslations('')
  return (
    <section className='px-8 py-[70px]'>
      {/* <div className="bg-blue-300 min-h-[calc(100vh-15rem)] w-full"></div> */}
      <div className='container relative mx-auto grid grid-cols-1 gap-10 lg:grid-cols-4'>
        <div className='mb-12 hidden lg:col-span-1 lg:flex'>
          {/* <div className="rounded-bl-[32px] h-[622px] w-[296px] bg-blue-200"> */}
          <img
            // width={296}
            // height={700}
            src='/image/1.jpg'
            className='h-[622px] w-[296px] rounded-bl-[32px] object-cover'
            alt='highlight1'
          />
          {/* </div> */}
        </div>
        <div className='col-span-2 p-5 lg:p-10'>
          <div className='mb-10 flex max-w-[500px] gap-4 md:mt-10 lg:mb-20'>
            <div className='px-2 text-[32px] font-bold leading-10 text-[#0199CB]'>
              1.
            </div>
            <div>
              {/* @ts-ignore */}
              <h2 className='mb-4 text-[32px] font-bold leading-10 text-[#0199CB]'>
                {t('titleHeroSection1')}
              </h2>
              {/* @ts-ignore */}
              <h5 className='mb-5 max-w-lg px-0 text-left text-[1rem] font-semibold leading-5 lg:px-0  '>
                {t('descriptionHeroSection1')}
              </h5>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='px-2 text-[32px] font-bold leading-10 text-[#0199CB] opacity-0'>
              2.
            </div>
            <div>
              {/* @ts-ignore */}
              <h2 className='mb-4 text-[32px] font-bold leading-10 text-[#0199CB]'>
                {t('titleHeroSection2')}
              </h2>
              {/* @ts-ignore */}
              <h5 className='mb-5 max-w-lg px-0 text-left text-[1rem] font-semibold leading-5 lg:px-0  '>
                {t('descriptionHeroSection2')}
              </h5>
            </div>
          </div>

          {/* <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div> */}
        </div>
        <div className='mb-12 mt-14 hidden lg:col-span-1 lg:flex '>
          <img
            // width={296}
            // height={622}
            src='/image/2.png'
            className='h-[622px] w-[296px] rounded-tl-[32px] object-cover'
            alt='highlight2'
          />
        </div>

        <div>
          <img
            src='/image/diagonalArrow.png'
            className='absolute left-[50%] top-0 max-w-[260px] translate-x-[-15%] translate-y-[35%]'
            alt='diagonalArrow1'
          />
          <img
            src='/image/diagonalArrow.png'
            className='absolute left-[50%] top-[105px] max-w-[260px] translate-x-[-90%] translate-y-[40%] rotate-[180deg]'
            alt='diagonalArrow2'
          />
        </div>
      </div>
    </section>
  )
}

export default Highlight
