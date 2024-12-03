'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
export function KisahSukses() {
  const dataPenghargaan = [
    { nama: 'Penghargaan 1', tahun: '2017', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 2', tahun: '2018', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 3', tahun: '2019', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 4', tahun: '2020', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 5', tahun: '2021', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 6', tahun: '2022', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 7', tahun: '2023', srcImg: '/image/sabukCartenz.png' },
    { nama: 'Penghargaan 8', tahun: '2024', srcImg: '/image/sabukCartenz.png' }
  ]

  // if (isLoading) {
  //   return (
  //     <div className='container mt-36'>
  //       <div className='px-8'>Loading....</div>
  //     </div>
  //   )
  // }
  // if (isError) return <div className='mt-36'>Error loading user data</div>
  return (
    <div className='container md:py-16'>
      <div className='px-8'>
        <h1 className='text-[20px] font-bold leading-normal text-secondary md:px-0 md:text-[32px]'>
          Kisah sukses kami
        </h1>
        <div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className='pb-14 pt-8 md:pt-12'
            containerClass=''
            dotListClass='custom-carousel-dots'
            draggable
            focusOnSelect
            infinite
            itemClass='pr-6'
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 1
                // partialVisibilityGutter: 400
              },
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
                partialVisibilityGutter: 300
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1
                // partialVisibilityGutter: 400
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1
                // partialVisibilityGutter: 200
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
                className='flex flex-col overflow-hidden rounded-3xl bg-[#ffffffab] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] md:flex-row'
                key={i}
              >
                <img
                  src='/image/sahrul.png'
                  alt='sahrul'
                  className='h-64 w-full rounded-3xl border border-black object-cover lg:h-full lg:w-1/2'
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
        <div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className='pb-14 pt-8 md:pt-16'
            containerClass=''
            dotListClass='custom-carousel-dots'
            draggable
            focusOnSelect
            infinite
            itemClass='pr-6'
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 6
                // partialVisibilityGutter: 400
              },
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6
                // partialVisibilityGutter: 300
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 5
                // partialVisibilityGutter: 400
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 2
                // partialVisibilityGutter: 200
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
            {dataPenghargaan.map((item: any, i: number) => (
              <div className='text-center' key={i}>
                <img
                  src='/image/sabukCartenz.png'
                  alt={'sabuk' + i}
                  className='mx-auto mb-2 w-24'
                />
                <p className='font-bold'>{item.nama}</p>
                <p className='text-[#828282]'>{item.tahun}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
