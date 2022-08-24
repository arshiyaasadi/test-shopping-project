//
// Navbar for use in Layout.ts

import React, { useEffect, useState } from 'react'
import {NextPage} from "next"
import Image from 'next/image'
import images from '../public/images'
import styles from "../styles/components/Layout.module.sass"
import { FaShoppingBag } from "react-icons/fa"
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { getCartSelector } from "../store/app/selectors"
import { fetchCartData } from "../store/app/actions"
import { Cart } from "../types/action"

const DashboardNavbar: NextPage = () => {
    const dispatch = useDispatch()
    const cart: Cart[] = useSelector(getCartSelector)
    const [cartLength, setCartLength] = useState<number>(0)

    // Set cart items in localstorage
    useEffect(()=> {
        if (cartLength || cart?.length) {
            localStorage.setItem('shoppingCart', JSON.stringify(cart))
            setCartLength(cart?.length)
        }
    }, [cart])

    // Get cart items from localstorage
    useEffect(()=> {
        if (!cart?.length) {
            const cart: Cart[] = JSON.parse(localStorage.getItem('shoppingCart') || '[]')
            dispatch(fetchCartData({cart}))
        }
    }, [])

    return (
        <>
            <header className={styles.Navbar}>
                {/* Logo */}
                <div>
                    <Image src={images.logo} alt="logo images" layout="fill" />
                </div>

                {/* Shopping Bag */}
                <div>
                    <Link href="/cart" >
                        <a>
                            {
                                cart?.length ? <span>{cart?.length ? cart?.length : ''}</span> : ''
                            }
                            <FaShoppingBag />
                        </a>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default DashboardNavbar