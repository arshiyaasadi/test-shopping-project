//
// Home page
import React from "react"
import type {GetStaticPropsContext, NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/pages/Home.module.sass'
import Layout from "../../components/Layout"
import ProductItem from "../../components/ProductItem"

// redux
import {wrapper} from "../../store"
import {fetchProductRequest} from "../../store/app/actions"
import {END} from "redux-saga"

const Product: NextPage = ({product}: any) => {

    return (
        <Layout>
            <Head>
                <title>Shopping website | {product?.title}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.main}>
                <h1 className={styles.title}>
                    {product?.title}
                </h1>

                <div className={styles.productContainer}>
                    {
                        <ProductItem productData={product} />
                    }
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps = wrapper.getStaticProps(
    (store: any) => async (context: GetStaticPropsContext) => {
        const {query: {productId}}: any = context

    //
    // check Data
    if (!store.getState()?.appData?.products?.length) {
        store.dispatch(fetchProductRequest())
        store.dispatch(END)
    }

    // await in saga
    await store.sagaTask.toPromise()


    const product = await store.getState()?.appData?.products.find((item: any)=> item?._id === productId)
    return {props: {...store.getState(), product}, }
})

export default Product