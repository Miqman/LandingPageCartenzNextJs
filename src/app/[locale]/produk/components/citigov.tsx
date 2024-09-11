import { Section1 } from './section1'

export default function Citigov() {
  const textEfd = {
    image: '/image/citigovPict1.png',
    logo: '/image/logos/citigov-svg.svg',
    first: 'Mendekatkan layanan pemerintah',
    mid: 'Diluncurkan pada tahun 2021',
    end: 'Citigov bertujuan untuk membuat proses layanan instansi pemerintah menjadi lebih efektif, efisien, praktis serta mendekatkan layanan pemerintah ke masyarakat dalam satu sistem'
  }
  return (
    <div className='container mx-auto'>
      <Section1 textLogo={textEfd} />
    </div>
  )
}
