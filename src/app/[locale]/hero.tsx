'use client'

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/bg_hero.png')] bg-cover bg-no-repeat">
      <div className='absolute inset-0 h-full w-full bg-gray-900/60' />
      <div className='grid min-h-screen px-8'>
        <div className='container relative z-10 mx-auto my-auto'>
          {/* @ts-ignore */}
          <h1 className='text-3xl font-black leading-[3rem] text-white md:max-w-full md:text-7xl md:leading-[5.488rem] lg:max-w-4xl lg:text-7xl lg:leading-[5.488rem]'>
            CARTENZ SATSET INDONESIA GASPOL
          </h1>
          {/* @ts-ignore */}
          <h6 className='mb-10 mt-6 w-full text-lg leading-7 text-white md:max-w-full  lg:max-w-4xl lg:text-2xl lg:leading-9'>
            Mendorong Pertumbuhan Ekonomi Daerah Indonesia melalui kemitraan
            dengan Pemerintah Daerah untuk meningkatkan Pendapatan,
            Produktivitas, dan Pelayanan Publik melalui Transformasi Digital
            yang Berkelanjutan dan Berdampak.
          </h6>
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
