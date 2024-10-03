'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export function KisahSukses() {
  return (
    <div className='rounded-t-[40px] bg-tertiary py-8'>
      <div className='container flex items-center justify-between text-lg font-bold lg:text-3xl'>
        <h1 className=''>Kisah sukses kami</h1>
        <p className='text-[#0199CB]'>Lebih Banyak</p>
      </div>
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className='container mx-auto py-20'
          containerClass=''
          dotListClass='custom-carousel-dots'
          draggable
          focusOnSelect
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            fullHdDesktop: {
              breakpoint: {
                max: 3000,
                min: 1920
              },
              items: 1,
              partialVisibilityGutter: 400
            },
            desktop: {
              breakpoint: {
                max: 1280,
                min: 1024
              },
              items: 1,
              partialVisibilityGutter: 250
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 768
              },
              items: 1,
              partialVisibilityGutter: 300
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          {[...new Array(5)].map((_, i) => (
            <div
              className='mx-auto mb-6 flex h-auto w-full max-w-[90%] flex-col overflow-hidden rounded-3xl bg-white lg:h-[506px] lg:max-w-[974px] lg:flex-row'
              key={i}
            >
              <img
                src='/image/sahrul.png'
                alt='sahrul'
                className='h-64 w-full object-cover lg:h-full lg:w-1/2'
              />
              <div className='p-4 lg:p-8'>
                <div className='flex flex-col gap-y-4 font-nunito lg:gap-y-6'>
                  <p className='text-base text-[#737679]'>
                    BAPENDA BADUNG, BALI
                  </p>
                  <h2 className='text-lg font-bold lg:text-xl'>
                    Peningkatan PAD BADUNG 200% tahun 2020
                  </h2>
                  <p className='text-sm lg:text-base'>
                    Presiden Joko Widodo melakukan kunjungan kerja ke Provinsi
                    Kalimantan Tengah pada Rabu, 26 Juni 2024. Dengan
                    menggunakan Pesawat Kepresidenan Indonesia-1, Presiden
                    Jokowi dan rombongan lepas landas melalui Pangkalan TNI AU
                    Halim Perdanakusuma, Jakarta sekitar pukul 07.00 WIB.
                    Setibanya di Bandara Tjilik Riwut, Kota Palangkaraya
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
