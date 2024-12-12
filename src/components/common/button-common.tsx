import { ReactElement } from 'react'
import { Button } from '../ui/button'

type Props = {
    label: string,
    icon?: ReactElement,
    className?: string
    isDisabled?: boolean,
    clickHandler: VoidFunction,
}

const ButtonCommon = ({
    label, icon, className, isDisabled, clickHandler
}: Props) => {
    return (
        <Button className={`relative inline-flex items-center gap-3 bg-transparent after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full hover:after:bg-[hsla(0,0%,50%,0)] ${className} capitalize transition`} onClick={clickHandler} disabled={isDisabled}>
            {
                label && <span>{label}</span>
            }
            {
                icon && <span>{icon}</span>
            }
        </Button>
    )
}

export default ButtonCommon