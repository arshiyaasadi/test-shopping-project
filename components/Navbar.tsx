// Navbar for use in Layout.ts

import React, {useCallback, useEffect, useState} from 'react'
import {NextPage} from "next"
import Image from 'next/image'
import images from '../public/images'
import styles from "../styles/components/Layout.module.sass"
import { useRouter } from 'next/router'


const DashboardNavbar: NextPage = () => {
    const router = useRouter()

    useEffect( ()=> {
    }, [])

    return (
        <>
            <div className={styles.Navbar}>
                <div>

                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default DashboardNavbar