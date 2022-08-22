//
// Cart page
import React from "react"
import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/pages/Cart.module.sass'
import Layout from "../../components/Layout"
import Image from "next/image"
import images from "../../public/images"
import { data } from "../../utiliy/products.json"

const Cart: NextPage = () => {
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
                    <div className={styles.cartOrders}>
                        <div>
                            <span>
                                <Image src={images?.product} alt={``} layout={"fill"} />
                            </span>
                            <div>
                                <div>
                                    <span>title: product title</span>
                                    <span>price: 1$</span>
                                </div>
                                <div>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>
                                <Image src={images?.product} alt={``} layout={"fill"} />
                            </span>
                            <div>
                                <div>
                                    <span>title: product title</span>
                                    <span>price: 1$</span>
                                </div>
                                <div>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>
                                <Image src={images?.product} alt={``} layout={"fill"} />
                            </span>
                            <div>
                                <div>
                                    <span>title: product title</span>
                                    <span>price: 1$</span>
                                </div>
                                <div>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cartInfo}>
                        <div>
                            <span>total cart</span>
                            <span>100$</span>
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
