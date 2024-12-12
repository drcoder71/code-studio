import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { initialStateTypes, setInput } from "@/features/code-editor/code-editor-slice";
import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

const INITIAL_VALUE = "// some comment";
const DEFAULT_LANGUAGE = "javascript";

const EditorCommon = () => {
    const dispatch = useAppDispatch()
    const codeeditor = useAppSelector(state => state.codeeditor.codeeditor)
    const editorRef = useRef(null);
    const [value, setValue] = useState(INITIAL_VALUE);

    const handleMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleChange = (newValue: any) => {
        dispatch(setInput(newValue))
        // setValue(newValue);
    };

    return (
        <div className="w-full h-[80vh]">
            <Editor
                height="100%"
                defaultLanguage={DEFAULT_LANGUAGE}
                defaultValue={INITIAL_VALUE}
                theme="vs-dark"
                onMount={handleMount}
                value={codeeditor.inputText}
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