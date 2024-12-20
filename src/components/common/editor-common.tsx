import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { LANGUAGE_SNIPPETS } from "@/constants/programming-language-data";
import { changeProgrammingLanguage, setInput } from "@/features/code-editor/code-editor-slice";
import { Editor } from "@monaco-editor/react";
import { useEffect } from "react";

const INITIAL_VALUE = "// some comment";
const DEFAULT_LANGUAGE = "javascript";

const EditorCommon = () => {
    const dispatch = useAppDispatch()
    const codeeditor = useAppSelector(state => state.codeeditor.codeeditor)

    useEffect(() => {
        dispatch(changeProgrammingLanguage(DEFAULT_LANGUAGE))
        dispatch(setInput(INITIAL_VALUE))
    }, [])

    // const handleMount = (editor: any) => {
    //     console.log(editor.value);

    //     // dispatch(setInput(editor))
    //     // editor.focus();
    // };

    const handleChange = (newValue: any) => {
        dispatch(setInput(newValue))
    };

    return (
        <div className="w-full h-[80vh] p-2 bg-[#1a1515] rounded-sm">
            <Editor
                height="100%"
                theme="vs-dark"
                // defaultValue={LANGUAGE_SNIPPETS[codeeditor.options.language] || codeeditor.inputText}
                language={codeeditor.options.language}
                value={LANGUAGE_SNIPPETS[codeeditor.options.language] || codeeditor.inputText}
                // onMount={handleMount}
                onChange={handleChange}
                options={{
                    fontSize: codeeditor.options.fontSize,
                    fontFamily: 'Jetbrains-Mono',
                    fontLigatures: true,
                    wordWrap: "bounded",
                    theme: "vs-dark",
                    minimap: {
                        enabled: codeeditor.options.showMinMap
                    },
                    bracketPairColorization: {
                        enabled: true,
                    },
                    cursorBlinking: "phase",
                    cursorStyle: "block",
                    formatOnPaste: true,
                    suggest: {
                        showFields: false,
                        showFunctions: true
                    }
                }}
            />
        </div>
    )
}

export default EditorCommon