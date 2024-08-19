import React from 'react'

const TiktokIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='32'
    height='32'
    fill='none'
    viewBox='0 0 32 32'
  >
    <path fill='url(#pattern0_30_261)' d='M0 0H32V32H0z'></path>
    <defs>
      <pattern
        id='pattern0_30_261'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.025)' xlinkHref='#image0_30_261'></use>
      </pattern>
      <image
        id='image0_30_261'
        width='40'
        height='40'
        xlinkHref='data:image/png;base64,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'
      ></image>
    </defs>
  </svg>
)

export default TiktokIcon
