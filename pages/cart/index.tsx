//
// Cart page
import React, {useEffect, useState} from "react"
import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/pages/Cart.module.sass'
import Layout from "../../components/Layout"
import Image from "next/image"
import images from "../../public/images"

// redux
import { useDispatch, useSelector } from "react-redux"
import {getCartSelector} from "../../store/app/selectors"
import { fetchCartItem } from "../../store/app/actions"
import {Cart, Product} from "../../types/globalTypes"

const Cart: NextPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector(getCartSelector)

    // Add or remove Item from cart in redux
    const changeCartItemStatus = (number: number, product: Product | any) =>{
        dispatch(fetchCartItem({number, product}))
    }

    // Get total price from cart item
    const getTotal = () => {
        return cart.reduce((total: any, item: any) => total + (+item.number * +item.item.price), 0)
    }
    return (
        <Layout>
            <Head>
                <title>Shopping website | Cart</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.main}>
                <h1 className={styles.title}>
                    Cart
                </h1>

                <div className={styles.cartContainer}>

                    {/*
                    *** Cart order section
                    */}
                    <div className={styles.cartOrders}>
                        {
                            cart.map((item: Cart, index: number)=> {
                                return(
                                    <div key={index}>
                                        <span>
                                            <Image src={images?.product} alt={``} layout={"fill"} />
                                        </span>
                                        <div>
                                            <div>
                                                <span>title: {item?.item?.title}</span>
                                                <span>price: {item?.item?.price}$</span>
                                            </div>
                                            <div>
                                                <span onClick={()=> changeCartItemStatus(-1, item?.item)}>-</span>
                                                <span>{item?.number}</span>
                                                <span onClick={()=> changeCartItemStatus(+1, item?.item)}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/*
                    *** Cart info section
                    */}
                    <div className={styles.cartInfo}>
                        <div>
                            <span>total cart</span>
                            <span>{getTotal()}$</span>
                        </div>
                        <div>
                            <span>discount</span>
                            <span>0$</span>
                        </div>
                        <div>
                            <span>subtotal</span>
                            <span>0$</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Cart
