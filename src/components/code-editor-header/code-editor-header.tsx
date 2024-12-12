import { ButtonCommon } from '../common'
import { BiReset } from "react-icons/bi";
import { TbTableOptions } from "react-icons/tb";
import { IoMdShareAlt } from "react-icons/io";
import { FaTerminal } from "react-icons/fa";

const CodeEditorHeader = () => {
  return (
    <div className='w-full flex items-center justify-between gap-4 py-3 mb-2 bg-card rounded-sm'>
        <div className='w-[50%] flex items-center justify-between pr-3'>
            <div className='w-1/2 flex items-center justify-start gap-4'>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h3 className='text-popover text-lg'>Code Studio</h3>
                    <p className='text-gray-500'>Write and execute your code</p>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-end gap-4'>
                <ButtonCommon label='' className='text-5xl rounded-sm text-popover bg-primary' icon={<TbTableOptions />} clickHandler={() => {}}/>
                <ButtonCommon label='' className='text-3xl rounded-sm text-popover bg-primary' icon={<BiReset />} clickHandler={() => {}}/>
                <ButtonCommon label='share' icon={<IoMdShareAlt />} className='text-popover px-3 py-3 bg-primary rounded-sm' clickHandler={() => {}} />
            </div>
        </div>
        <div className='h-[50px] border border-gray-500/25'></div>
        <div className='w-[50%] flex items-center justify-between px-3'>
            <p className='flex items-center gap-2'>
                <span className='inline-block text-xl text-primary bg-[#ffffff14] p-2 rounded-sm'><FaTerminal /></span>
                <span className='text-popover text-xl'>Output</span>
            </p>
            <ButtonCommon label='Run Code' className='text-popover text-lg py-6 bg-green-800 hover:bg-green-800 hover:after:bg-gray-500/25' clickHandler={() => {}}/>
        </div>
    </div>
  )
}

export default CodeEditorHeader