import { ReactElement } from 'react'
import { Button } from '../ui/button'

type Props = {
    label?: string | ReactElement,
    icon?: ReactElement,
    className?: string
    isDisabled?: boolean,
    clickHandler: VoidFunction,
}

const ButtonCommon = ({
    label, icon, className, isDisabled, clickHandler
}: Props) => {
    return (
        <Button className={`relative flex items-center gap-2 bg-transparent after:absolute after:top-0 after:left-0 after:content-[''] after:w-full after:h-full hover:after:bg-[hsla(0,0%,50%,0)] ${className} capitalize transition overflow-hidden ${isDisabled ? 'cursor-not-allowed': 'cursor-pointer'}`} onClick={clickHandler} disabled={isDisabled}>
            {
                label && label
            }
            {
                icon && <>{icon}</>
            }
        </Button>
    )
}

export default ButtonCommon