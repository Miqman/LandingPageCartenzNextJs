import { useTranslations } from 'next-intl'
import Hero from './hero'
import Highlight from './highlight'
import Highlight2 from './highlight2'
import { KisahSukses } from './KisahSukses'

export default function DashboardPage() {
  return (
    <div className='relative'>
      <Hero />
      <Highlight2 />
      <div className='absolute left-0 top-[calc(100vh)] hidden md:block'>
        <hr className='ml-10 h-[1100px] w-[1px] bg-gray-300' />
      </div>
      <div className='hidden md:block'>
        <div className='px-4'>
          <hr />
        </div>
      </div>
      <KisahSukses />
    </div>
  )
}
