// Navbar for use in Layout.ts

import React, {useCallback, useEffect, useState} from 'react'
import {NextPage} from "next"
import Image from 'next/image'
import images from '../public/images'
import styles from "../styles/components/Layout.module.sass"
import { useRouter } from 'next/router'
import { FaShoppingBag } from "react-icons/fa"



const DashboardNavbar: NextPage = () => {
    const router = useRouter()

    useEffect( ()=> {
    }, [])

    return (
        <>
            <header className={styles.Navbar}>
                {/*
                *** Shopping Bag
                */}
                <div>
                    <span>1</span>
                    <FaShoppingBag />
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