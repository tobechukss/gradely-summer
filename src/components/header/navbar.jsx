import navigation from '../../../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function Navbar() {
    const router = useRouter()
    const path = router.pathname
    const [open, isOpen] = useState(false)
    const [pageload, isPageLoad] = useState(true)
    function openMenu() {
        isPageLoad(false)
        open === false ? isOpen(true) : isOpen(false)
    }

    function navFlow() {
        if (!open && pageload) {
            return `${navigation.mobile} ${navigation.start}`
        } else if (open && !pageload) {
            return `${navigation.mobile} ${navigation.down}`
        } else if (!open && !pageload) {
            return `${navigation.mobile} ${navigation.up}`
        }
    }
    return (
        <nav className={navigation.nav}>
            <Image src={'/images/logo.svg'} alt="logo" width={124} height={45} />
            <ul className={navigation.members}>
                <Link href={'/parents'}><li className={path.indexOf("/parents") !== -1 ? navigation.highlight : ""}>Parents</li></Link>
                <Link href={'/schools'}><li className={path.indexOf("/schools") !== -1 ? navigation.highlight : ""}>Schools</li></Link>
                <Link href={'/teachers'}><li className={path.indexOf("/teachers") !== -1 ? navigation.highlight : ""}>Teachers</li></Link>
                <Link href={'/resources'}><li className={path.indexOf("/resources") !== -1 ? navigation.highlight : ""}>Resources</li></Link>

            </ul>
            <ul className={navigation.cta}>
                <li className={`btn btn-outline ${navigation.btncta}`}>Start learning</li>
                <li className={`btn btn-secondary ${navigation.btncta}`}>Log In</li>
                <li className={open ? `${navigation.menu}` : `${navigation.menuopen}`} onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ul>

            {/* <ul className={open ?`${navigation.mobile} ${navigation.down}`:`${navigation.mobile} ${navigation.up}`}> */}
            <ul className={navFlow()}>
                <Link href={'/parents'}><li >Parents</li></Link>
                <Link href={'/schools'}><li >Schools</li></Link>
                <Link href={'/teachers'}><li>Teachers</li></Link>
                <Link href={'/resources'}><li >Resources</li></Link>
                <li className='btn btn-outline'>Start learning</li>
                <li className='btn btn-secondary'>Log In</li>
            </ul>
        </nav>
    )
}