'use client'
import { useTranslations } from 'next-intl'
import { useState, useEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function TentangKami() {
  const [activeSection, setActiveSection] = useState('perkenalan')
  const [isHovered, setIsHovered] = useState('')
  const t = useTranslations('')

  const perkenalanRef = useRef(null)
  const expertRef = useRef(null)

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5 // Adjust this value to trigger the active state earlier or later
    })

    if (perkenalanRef.current) {
      observer.observe(perkenalanRef.current)
    }
    if (expertRef.current) {
      observer.observe(expertRef.current)
    }

    return () => {
      if (perkenalanRef.current) {
        observer.unobserve(perkenalanRef.current)
      }
      if (expertRef.current) {
        observer.unobserve(expertRef.current)
      }
    }
  }, [])

  return (
    <div className=''>
      <div className='h-[100px] w-full'></div>
      <section className='bg-tertiary flex h-[100px] items-center justify-center space-x-5 text-[#828282]'>
        <div
          className={`relative text-base font-bold ${activeSection === 'perkenalan' || isHovered === 'perkenalan' ? 'text-[#0199cb]' : 'text-[#828282]'}`}
          onMouseEnter={() => setIsHovered('perkenalan')}
          onMouseLeave={() => setIsHovered('')}
          onClick={() => {
            const element = document.getElementById('perkenalan')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <p className='cursor-pointer py-2'>Perkenalan</p>
          {(activeSection === 'perkenalan' || isHovered === 'perkenalan') && (
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-[#0199cb]'></div>
          )}
        </div>
        <div
          className={`relative text-base font-bold ${activeSection === 'expert' || isHovered === 'expert' ? 'text-[#0199cb]' : 'text-[#828282]'}`}
          onMouseEnter={() => setIsHovered('expert')}
          onMouseLeave={() => setIsHovered('')}
          onClick={() => {
            const element = document.getElementById('expert')
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <p className='cursor-pointer py-2'>Expert</p>
          {(activeSection === 'expert' || isHovered === 'expert') && (
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-[#0199cb]'></div>
          )}
        </div>
      </section>
      <section id='perkenalan' ref={perkenalanRef}>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='py-10 md:py-20 md:pr-16'>
              <h1 className='text-4xl font-bold md:text-6xl'>Kami Cartenz!</h1>
              <p className='mt-10 text-lg md:text-xl'>
                Cartenz adalah Perusahaan Teknologi Nasionalis yang membantu
                Pimpinan Daerah membangun Pemerintahan yang mampu mencapai
                tujuan untuk melayani masyarakat secara optimal melalui seluruh
                instrumen pemerintahan baik itu APBD (harus besar APBD-nya), SDM
                (harus baik kualitasnya), maupun sistem pendukung (harus prima
                sistem yang mendukung) dengan cara mencapai tujuan tersebut
                dengan biaya, waktu, dan sumber daya yang efisien.
              </p>
            </div>
            <div className='flex h-[300px] items-center justify-center bg-slate-400 md:h-[611px]'>
              <span>foto</span>
            </div>
          </div>
        </div>
        <div className='bg-tertiary py-6'>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className='container py-12'
            containerClass=''
            dotListClass='custom-carousel-dots'
            draggable
            focusOnSelect
            infinite
            itemClass=''
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 5,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 4,
                partialVisibilityGutter: 30
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 2,
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
            {[...new Array(10)].map((_, i) => (
              <div className='text-center' key={i}>
                <img
                  src='/image/sabukCartenz.png'
                  alt={'sabuk' + i}
                  className='mx-auto mb-2 w-24'
                />
                <p className='font-bold'>Penghargaan 1</p>
                <p className='text-[#828282]'>2014</p>
              </div>
            ))}
          </Carousel>
        </div>
        <div className='container relative'>
          <div className='py-20'>
            <h1 className='text-center text-3xl font-bold uppercase md:text-left'>
              misi kami
            </h1>
            <div className='mt-10 flex flex-col gap-14 px-4 text-lg md:mt-20 md:px-12 md:text-xl'>
              <div className='misikami flex flex-col items-center justify-between gap-8 md:flex-row'>
                <p className='w-full md:w-auto'>
                  <span></span>Berkontribusi Terhadap Bangsa
                </p>
                <p className='w-full md:w-auto'>
                  <span></span>Tata Kelola yang Bersih
                </p>
                <p className='w-full md:w-auto'>
                  <span></span>Pengelolaan Pendapatan Daerah yang Efektif
                </p>
              </div>
              <div className='misikami flex flex-col items-center justify-between gap-8 md:flex-row md:px-10'>
                <p className='w-full md:w-auto'>
                  <span></span>Layanan Publik Digital yang Cepat dan Handal
                </p>
                <p className='w-full md:w-auto'>
                  <span></span>Membangun Struktur Pemerintahan yang Efisien
                </p>
              </div>
              <div className='misikami flex flex-col items-center justify-between gap-8 md:flex-row'>
                <p className='w-full md:w-auto'>
                  <span></span>Pendekatan Inovatif dalam Digitalisasi Pemerintah
                  Daerah
                </p>
                <p className='w-full md:w-auto'>
                  <span></span>Mempromosikan Kesuksesan transformasi Digital
                </p>
              </div>
            </div>
          </div>

          <span className='absolute h-[2px] w-full bg-secondary'></span>
          <span className='absolute right-8 top-32 hidden h-[600px] w-[2px] bg-secondary md:block'></span>

          <div className='py-20'>
            <h1 className='text-center text-3xl font-bold capitalize md:text-left'>
              perjalanan kami
            </h1>
            <div className='mt-10 grid grid-cols-1 gap-6 px-4 text-lg md:mt-16 md:grid-cols-2 md:px-6 md:text-xl lg:grid-cols-4'>
              {[...new Array(4)].map((_, i) => (
                <div
                  className='bg-card-primary flex flex-col gap-y-6 rounded-lg px-6 py-8 drop-shadow-lg md:px-8 md:py-12'
                  key={i}
                >
                  <p className='text-2xl font-bold'>2014</p>
                  <p className=''>
                    Nasi Uduk atu, pake kan teri, tempet goreng, sambel yang
                    banyak
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id='expert' ref={expertRef} className='bg-[#121212]'>
        <div className='container py-20 text-white'>
          <h1 className='text-3xl font-bold'>Expert</h1>
          <div className='mt-16 grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4'>
            {[...new Array(8)].map((_, i) => (
              <div className='flex flex-col gap-y-3' key={i}>
                <img src='/image/kangNasduk.png' alt='kangNasduk' />
                <p className='text-2xl font-bold'>Mr. A</p>
                <p className='text-xl'>Kang Nasduk</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
