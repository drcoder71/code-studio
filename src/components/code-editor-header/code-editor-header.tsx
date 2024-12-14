import { ButtonCommon, SelectCommon } from '../common'
import { BiReset } from "react-icons/bi";
import { TbTableOptions } from "react-icons/tb";
import { IoMdShareAlt } from "react-icons/io";
import { FaTerminal } from "react-icons/fa";
import { LANGUAGE } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { changeProgrammingLanguage, setInput, setOutput } from '@/features/code-editor/code-editor-slice';
import executeCodeFn from '@/api/code.api';
import { LANGUAGE_ICONS } from '@/constants/programming-language-data';

const CodeEditorHeader = () => {
    const dispatch = useAppDispatch()
    const codeeditor = useAppSelector(state => state.codeeditor.codeeditor)

    const changeLanguage = (value: string) => {
        dispatch(changeProgrammingLanguage(value))
    }

    const resetInputFn = () => {
        dispatch(setInput('// some comment'))
    }

    const runCode = async () => {
        const code = codeeditor.inputText;
        if (!code) {
          dispatch(setOutput(''));
          return;
        }
        try {
          const { run: result } = await executeCodeFn(
            codeeditor.options.language,
            code
          );
          dispatch(setOutput(result.output));
        } catch (err) {
          console.log(err);
        }
      };
  return (
    <div className='w-full flex items-center justify-between gap-4 py-3 mb-2 bg-card rounded-sm'>
        <div className='w-[50%] flex items-center justify-between px-2'>
            <div className='w-1/2 flex items-center justify-start gap-4'>
                <div className='text-5xl text-yellow-600'>
                    {LANGUAGE_ICONS[codeeditor.options.language]}
                </div>
                <div>
                    <h3 className='text-popover text-lg'>Code Studio</h3>
                    <p className='text-gray-500'>Write and execute your code</p>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-end gap-4'>
                <ButtonCommon label='' className='text-3xl rounded-sm text-popover bg-primary' icon={<BiReset />} clickHandler={() => resetInputFn()}/>
                <ButtonCommon label='' className='text-5xl rounded-sm text-popover bg-primary' icon={<TbTableOptions />} clickHandler={() => {}} isDisabled={true}/>
                <ButtonCommon label='share' icon={<IoMdShareAlt />} className='text-popover px-3 py-3 bg-primary rounded-sm' clickHandler={() => {}} isDisabled={true}/>
            </div>
        </div>
        <div className='h-[50px] border border-gray-500/25'></div>
        <div className='w-[50%] flex items-center justify-between px-3'>
            <p className='flex items-center gap-2'>
                <span className='inline-block text-xl text-primary bg-[#ffffff14] p-2 rounded-sm'><FaTerminal /></span>
                <span className='text-popover text-xl'>Output</span>
            </p>
            <div className='flex items-center gap-4'>
                <SelectCommon title='language' data={LANGUAGE} clickHandler={(value: any) => changeLanguage(value)}/>
                <ButtonCommon label='Run Code' className='text-popover text-lg py-6 bg-green-800 hover:bg-green-800 hover:after:bg-gray-500/25' clickHandler={() => runCode()}/>
            </div>
        </div>
    </div>
  )
}

export default CodeEditorHeader