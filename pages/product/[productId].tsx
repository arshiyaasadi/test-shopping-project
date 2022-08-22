//
// Home page
import React from "react"
import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/pages/Home.module.sass'
import Layout from "../../components/Layout"
import ProductItem from "../../components/ProductItem"
import { data } from "../../utiliy/products.json"

const Product: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Shopping website | {data[0]?.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.main}>
                <h1 className={styles.title}>
                    {data[0]?.title}
                </h1>

                <div className={styles.productContainer}>
                    {
                        <ProductItem productData={data[0]} />
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Product
