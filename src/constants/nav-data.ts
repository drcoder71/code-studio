import { ReactElement } from "react"

export type NavDataType = {
    label: string,
    link: string
}

export const NavData: NavDataType[] = [
    {
        label: 'explore',
        link: '/',
    },
    {
        label: 'snippets',
        link: '/snippet',
    },
    {
        label: 'studio',
        link: 'code-studio',
    },
]