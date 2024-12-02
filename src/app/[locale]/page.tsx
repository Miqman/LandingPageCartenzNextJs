import { useTranslations } from 'next-intl'
import Hero from './hero'
import Highlight from './highlight'
import Highlight2 from './highlight2'
import { KisahSukses } from './KisahSukses'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <Hero />
      {/* <Highlight /> */}
      <Highlight2 />
      <KisahSukses />
    </div>
  )
}
