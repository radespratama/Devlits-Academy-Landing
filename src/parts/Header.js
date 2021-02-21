import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import propTypes from 'prop-types'

import Logo from '../../public/images/logo-devlits.svg'
import DefaultAvatar from '../../public/images/icon/icon-avatar.svg'

export default function Header({onLight}) {

    const [User, setUser] = useState(()=> null)
    const [ToggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        const userCookies = decodeURIComponent(window.document.cookie)?.split(";")?.find?.( item => item.indexOf("DEVLITS:user") > -1)?.split("=")[1] ?? null;
        setUser(userCookies ? JSON.parse(userCookies) : null)
    }, [])

    const linkColor = onLight ? "text-gray-800" : "text-white";
    const router = useRouter()

    // Rute jika kita mengklik button CTA
    const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` : 
    `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`

    const textCTA = router.pathname.indexOf("/login") > -1 ? 'Sign Up' : 'Login'

    return (
        <header className={[
            'flex justify-between items-centers', ToggleMenu ? "fixed w-full -mx-4 px-4" : ""
        ].join(" ")}>
            <Logo style={{ height: 43, zIndex: 50 }} className="on-dark"></Logo>
            <div className="flex md:hidden">
                <button onClick={() => setToggleMenu(prev => !prev)} className={[
                    "toggle z-50", ToggleMenu ? "active" : ""
                    ].join(" ")}>
                </button>
            </div>
            <ul className={["transition-all duration-200 items-center fixed inset-0 bg-indigo-1000 pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible", ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible"].join(" ")}>
                <li className="nav-item my-4 md:my-0">
                    <Link href="/"><a className={[linkColor, "text-white hover:text-teal-600 text-md px-6 py-3"].join(" ")}>Home</a></Link>
                </li>
                <li className="nav-item my-4 md:my-0">
                    <Link href="/mentors"><a className={[linkColor, "text-white hover:text-teal-600 text-md px-6 py-3"].join(" ")}>Mentors</a></Link>
                </li>
                <li className="nav-item my-4 md:my-0">
                    <Link href="/jobs"><a className={[linkColor, "text-white hover:text-teal-600 text-md px-6 py-3"].join(" ")}>Jobs</a></Link>
                </li>
                <li className="nav-item my-4 md:my-0">
                    <Link href="/events"><a className={[linkColor, "text-white hover:text-teal-600 text-md px-6 py-3"].join(" ")}>Events</a></Link>
                </li>
                <li className="nav-item mt-8 md:mt-0">
                    {
                        User ? 
                        <a target="_blank" href={linkCTA} rel="noopener noreferrer" className="hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-md px-6 py-3 ml-6 inline-flex items-center">
                        <span className="rounded-full overflow-hidden mr-3 border-2 border-blue-500">
                            {
                                User?.thumbnail? <img src={User?.thumbnail} alt={User?.name ?? 'Profil Name'} className="object-cover w-8 h-8 inline-block"/> : <DefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block"></DefaultAvatar>
                            }
                        </span>
                        Hi, { User.name }
                        </a> 
                        : 
                        <a target="_blank" href={linkCTA} rel="noopener noreferrer" className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-md px-6 py-3 ml-6">{ textCTA }</a>
                    }
                </li>
            </ul>
        </header>
    )
}

Header.propTypes = {
    onLight: propTypes.bool,
}
