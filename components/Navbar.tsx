// Navbar for use in Layout.ts

import React, {useCallback, useEffect, useState} from 'react'
import {NextPage} from "next"
import Image from 'next/image'
import images from '../public/images'
import styles from "../styles/components/Layout.module.sass"
import { useRouter } from 'next/router'
import { FaShoppingBag } from "react-icons/fa"
import Link from 'next/link'
import {useSelector} from "react-redux";
import {getCartSelector} from "../store/app/selectors";



const DashboardNavbar: NextPage = () => {
    const cart = useSelector(getCartSelector)

    return (
        <>
            <header className={styles.Navbar}>
                {/*
                *** Shopping Bag
                */}
                <div>
                    <Link href="/cart" >
                        <a>
                            <span>{cart?.length ? cart?.length : ''}</span>
                            <FaShoppingBag />
                        </a>
                    </Link>
                </div>

                {/*
                *** Logo
                */}
                <div>
                    <Image src={images.logo} alt="logo images" layout="fill" />
                </div>
            </header>
        </>
    )
}

export default DashboardNavbar