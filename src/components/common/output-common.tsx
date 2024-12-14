import { useAppSelector } from '@/app/hooks'
import React from 'react'

const OutputCommon = () => {
  const codeeditor = useAppSelector(state => state.codeeditor.codeeditor)
  return (
    <div className='w-full h-[80vh] bg-card py-2 px-3 rounded-sm'>
      <p className='font-[monospace] text-sm text-popover'>{codeeditor.outputText}</p>
    </div>
  )
}

export default OutputCommon