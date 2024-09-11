import logoEfd from '@/public/image/efd.png'
import { Section1 } from './section1'

export default function Efd() {
  const textEfd = {
    first: 'Electronic Fiscal devices',
    mid: 'Diluncurkan pada tahun 2017',
    end: 'EFD diciptakan sebagai solusi komprehensif bagi pemerintah daerah dalam meningkatkan penerimaan pajak daerah.'
  }
  return (
    <div className='container mx-auto'>
      <Section1 logo={logoEfd} textLogo={textEfd} />
    </div>
  )
}
