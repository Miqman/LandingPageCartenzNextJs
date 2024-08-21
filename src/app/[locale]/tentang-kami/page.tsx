'use client'
import { useTranslations } from 'next-intl'
import { useState, useEffect, useRef } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function TentangKami() {
  const [activeSection, setActiveSection] = useState('')
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
      <section className='flex h-[100px] items-center justify-center space-x-5 bg-[#F7F8FC] text-[#828282]'>
        <div
          className={`relative text-base font-bold ${activeSection === 'perkenalan' || isHovered === 'perkenalan' ? 'text-secondary' : 'text-[#828282]'}`}
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
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-secondary'></div>
          )}
        </div>
        <div
          className={`relative text-base font-bold ${activeSection === 'expert' || isHovered === 'expert' ? 'text-secondary' : 'text-[#828282]'}`}
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
            <div className='absolute inset-x-0 bottom-0 h-[4px] rounded-b-lg bg-secondary'></div>
          )}
        </div>
      </section>
      <section id='perkenalan' ref={perkenalanRef}>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='px-6 py-10 md:py-20 md:pl-16'>
            <h1 className='text-4xl font-bold md:text-6xl'>Kami Cartenz!</h1>
            <p className='mt-4 text-lg md:text-xl'>
              Cartenz adalah Perusahaan Teknologi Nasionalis yang membantu
              Pimpinan Daerah membangun Pemerintahan yang mampu mencapai tujuan
              untuk melayani masyarakat secara optimal melalui seluruh instrumen
              pemerintahan baik itu APBD (harus besar APBD-nya), SDM (harus baik
              kualitasnya), maupun sistem pendukung (harus prima sistem yang
              mendukung) dengan cara mencapai tujuan tersebut dengan biaya,
              waktu, dan sumber daya yang efisien.
            </p>
          </div>
          <div className='flex h-[300px] items-center justify-center bg-slate-400 md:h-[611px]'>
            <span>foto</span>
          </div>
        </div>
        <div className='bg-tertiary py-6'>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className='py-12'
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
                items: 6,
                partialVisibilityGutter: 40
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 3,
                partialVisibilityGutter: 30
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
      </section>
      <section id='expert' ref={expertRef} className='min-h-[300px]'>
        {/* Konten Expert */}
        <h2>Expert</h2>
      </section>
    </div>
  )
}
