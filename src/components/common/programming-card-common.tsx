import React from 'react'

// type Props = {

// }

const ProgrammingCardCommon = ({
    src,
    alt,
    className
}: {
    src: string,
    alt: string,
    className: string
}) => {
  return (
    <div className={`${className}`}>
        <img src={src} alt={alt} className='w-full h-full object-contain aspect-square' />
    </div>
  )
}

export default ProgrammingCardCommon