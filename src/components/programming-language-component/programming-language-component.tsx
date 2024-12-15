import { LANGUAGE_ICONS } from "@/constants/programming-language-data"

const languageArrWithIcon = Object.entries(LANGUAGE_ICONS)

const ProgrammingLanguageComponent = () => {
    return (
        <div className="flex items-center justify-center gap-6 bg-card p-6 rounded-sm ">
            {
                languageArrWithIcon.map(([lang, icon]: any) => (
                    <div className="w-[200px] h-[200px] border border-gray-700/25 rounded-md flex items-center justify-center text-7xl hover:bg-gray-500/25 transition-colors" key={lang}>
                        {icon}
                    </div>
                ))
            }
        </div>
    )
}

export default ProgrammingLanguageComponent