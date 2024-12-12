import { RootState } from "@/app/store"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type initialStateTypes = {
    codeeditor: {
        inputText: string,
        outputText: string,
        options: {
            language: string,
            showMinMap: boolean,
            fontSize: number
        }
    }
}

const initialState: initialStateTypes = {
    codeeditor: {
        inputText: '',
        outputText: '',
        options: {
            language: '',
            fontSize: 14,
            showMinMap: false
        }
    }
}

export const CodeEditorSlice = createSlice({
    name: 'codeeditor',
    initialState,
    reducers: {
        setInput: (state, action: PayloadAction<string>) => {
            state.codeeditor.inputText = action.payload
        },
        setOutput: (state, action: PayloadAction<string>) => {
            state.codeeditor.outputText = action.payload
        },
        changeProgrammingLanguage: (state, action: PayloadAction<string>) => {
            state.codeeditor.options.language = action.payload
        },
        changeFontSize: (state, action: PayloadAction<number>) => {
            state.codeeditor.options.fontSize = action.payload
        },
        setMinMap: (state, action: PayloadAction<boolean>) => {
            state.codeeditor.options.showMinMap = action.payload
        },
    }
})

export const { setInput, setOutput, changeProgrammingLanguage, changeFontSize, setMinMap } = CodeEditorSlice.actions
export const codeEditor = (state: RootState) => state.codeeditor

export default CodeEditorSlice.reducer
