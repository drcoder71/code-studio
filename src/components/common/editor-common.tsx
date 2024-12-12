import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

const INITIAL_VALUE = "// some comment";
const DEFAULT_LANGUAGE = "javascript";

const EditorCommon = () => {
    const editorRef = useRef(null);
    const [value, setValue] = useState(INITIAL_VALUE);

    const handleMount = (editor: any) => {
        editorRef.current = editor;
        editor.focus();
    };

    const handleChange = (newValue: any) => {
        setValue(newValue);
    };

    return (
        <div className="w-full h-[80vh]">
            <Editor
                height="100%"
                defaultLanguage={DEFAULT_LANGUAGE}
                defaultValue={INITIAL_VALUE}
                onMount={handleMount}
                value={value}
                onChange={handleChange}
                options={{
                    fontSize: 14,
                    fontFamily: 'Jetbrains-Mono',
                    fontLigatures: true,
                    wordWrap: "bounded",
                    theme: "vs-dark",
                    minimap: {
                        enabled: false
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