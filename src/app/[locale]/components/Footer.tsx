import FacebookIcon from '../../icons/facebook'
import GithubIcon from '../../icons/github'
import InstagramIcon from '../../icons/instagram'
import TiktokIcon from '../../icons/tiktok'
import TwitterIcon from '../../icons/twitter'
import YoutubeIcon from '../../icons/youtube'

const LINKS = [
  {
    title: 'PRODUK',
    items: ['Smartgov', 'EFD', 'Citigov', 'Konsultan']
  },
  {
    title: 'INFORMASI',
    items: ['Tentang Kami', 'Kebijakan Privasi', 'Artikel', 'Hubungi Kami']
  }
]

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className='px-8 pb-8 pt-24'>
      <div className='border-blue-gray-50 container mx-auto flex flex-col border-t'>
        <div className='grid !w-full grid-cols-1 gap-x-10 lg:mt-10 lg:grid-cols-3'>
          <div className='col mb-5'>
            <img src='/image/logo-footer-cartenz.svg' alt='' />
            <p className='mb-4 mt-8 text-base font-normal'>
              Millennium Centennial Center, Lantai 51 Jl. Jenderal Sudirman
              No.Kav. 25, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta
              Selatan, Daerah Khusus Ibukota Jakarta, 12920
            </p>
          </div>

          <div className='col mb-10'>
            <h6 className='text-blue-gray-900 mb-4'>Ikuti Kami</h6>
            <div className='flex gap-4'>
              <a
                href='https://github.com/yahyaparvar/nextjs-template'
                target='_blank'
              >
                <div className='size-8'>
                  <FacebookIcon />
                </div>
              </a>
              <a
                href='https://github.com/yahyaparvar/nextjs-template'
                target='_blank'
              >
                <div className='size-8'>
                  <InstagramIcon />
                </div>
              </a>
              <a
                href='https://github.com/yahyaparvar/nextjs-template'
                target='_blank'
              >
                <div className='size-8'>
                  <TiktokIcon />
                </div>
              </a>
              <a
                href='https://github.com/yahyaparvar/nextjs-template'
                target='_blank'
              >
                <div className='size-8'>
                  <TwitterIcon />
                </div>
              </a>
              <a
                href='https://github.com/yahyaparvar/nextjs-template'
                target='_blank'
              >
                <div className='size-8'>
                  <YoutubeIcon />
                </div>
              </a>
            </div>
          </div>

          <div className='col mb-10 flex items-center gap-5 md:gap-36 lg:mb-0'>
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <h6 className='text-blue-gray-900 mb-4'>{title}</h6>
                {items.map(link => (
                  <li key={link}>
                    <a
                      href='#'
                      className='py-1 font-normal transition-colors hover:!text-gray-900'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className='mt-16 font-normal md:text-center'>
          &copy; © Copyright 2024 PT Cartenz Technology Indonesia All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
