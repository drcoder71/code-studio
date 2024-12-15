import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { languageType } from "@/constants/programming-language-data"

const SelectCommon = ({ title, data, clickHandler }: {
    title: string,
    data: languageType[],
    clickHandler: any
}) => {
    return (
        <Select onValueChange={clickHandler}>
            <SelectTrigger className="w-[180px] text-popover border-gray-700">
                <SelectValue placeholder={title} className="text-popover"/>
            </SelectTrigger>
            <SelectContent className="bg-background border-card ">
                {
                    data.map(({ label }) => (
                        <SelectItem className="text-popover hover:cursor-pointer" key={label} value={label}>
                            <span>{label}</span>
                        </SelectItem>
                    ))
                }
            </SelectContent>
        </Select>
    )
}

export default SelectCommon