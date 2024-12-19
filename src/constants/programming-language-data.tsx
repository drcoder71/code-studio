import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { RiJavaLine, RiJavascriptFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";

export type languageType = {
    label: string
}

export const LANGUAGE: languageType[] = [
    {
        label: "javascript"
    },
    {
        label: "typescript"
    },
    {
        label: "python"
    },
    {
        label: "java"
    },
    {
        label: "cpp"
    },
    {
        label: "ruby"
    },
    {
        label: "csharp"
    },
    {
        label: "go"
    }
]

export const LANGUAGE_VERSION: any = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    java: "15.0.2",
    python: "3.10.0"
}

export const LANGUAGE_ICONS: any = {
    javascript: <RiJavascriptFill />,
    typescript: <BiLogoTypescript  />,
    java: <RiJavaLine />,
    python: <FaPython />,
    cpp: <TbBrandCpp />
}

export const LANGUAGE_SNIPPETS: any = {
    javascript: `const gretting = () => {
    console.log("Hello Js")
}
    
gretting()`,
    typescript: `const gretting = () => {
    console.log("Hello Ts")
}
    
gretting()`,
    python: `def gretting(x, y):
    print("Hello Python)

gretting()`
}