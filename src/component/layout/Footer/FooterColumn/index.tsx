import { textColors } from '@/constant/colors'
import { FooterLinkI } from '@/types/interface'
import React from 'react'

type FooterColumnProps = {
    title: string,
    links: FooterLinkI[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
    return (
        <div>
            <h3 className={`${textColors.textWhite} text-xl font-semibold mb-5`}>{title}</h3>
            <ul className="space-y-2 text-sm">
                {
                    links.map((el, i) => {
                        return <li className={`${textColors.textWhite} text-sm hover:underline cursor-pointer`} key={i}>
                            {el.text}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default FooterColumn