import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.sass'
import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"
import { data } from "../utiliy/products.json"
import { Product } from "../types/globalTypes"
import React from "react";

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Shopping website</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://pelazio.com/ir-fa/">shopping website</a>
                </h1>

                <div className={styles.productsContainer}>
                    {
                        data.map((item: Product)=> <ProductItem productData={item} key={item?._id} />)
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Home
