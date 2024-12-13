import { LANGUAGE_VERSION } from '@/constants/programming-language-data';
import axios from 'axios'
// import { LANGUAGE_VERSION } from '../constants/programmingLangData.jsx'

const API = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston'
})

const executeCodeFn = async (language: string, sourceCode: string) => {
    console.log(language, sourceCode);
    
    const code = await API.post('/execute', {
        "language": language,
        "version": LANGUAGE_VERSION[language],
        "files": [
            {
                "content": sourceCode
            }
        ]
    })
    return code.data
}

export default executeCodeFn