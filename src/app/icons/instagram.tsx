import React from 'react'

const InstagramIcon: React.FC = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width='32'
    height='32'
    fill='none'
    viewBox='0 0 32 32'
  >
    <g clipPath='url(#clip0_30_258)'>
      <path fill='url(#pattern0_30_258)' d='M0 0H32V32H0z'></path>
    </g>
    <defs>
      <pattern
        id='pattern0_30_258'
        width='1'
        height='1'
        patternContentUnits='objectBoundingBox'
      >
        <use transform='scale(.025)' xlinkHref='#image0_30_258'></use>
      </pattern>
      <clipPath id='clip0_30_258'>
        <path fill='#fff' d='M0 0H32V32H0z'></path>
      </clipPath>
      <image
        id='image0_30_258'
        width='40'
        height='40'
        xlinkHref='data:image/png;base64,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'
      ></image>
    </defs>
  </svg>
)

export default InstagramIcon
