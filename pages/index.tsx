//
// Home page
import React, { useEffect } from "react"
import type {NextPage, GetServerSideProps} from 'next'
import Head from 'next/head'
import styles from '../styles/pages/Home.module.sass'
import Layout from "../components/Layout"
import ProductItem from "../components/ProductItem"
import { Product } from "../types/globalTypes"

// redux
import { useSelector } from "react-redux"
import { END } from "redux-saga"
import { wrapper } from '../store'
import {getPendingSelector, getErrorSelector,} from "../store/app/selectors"
import { fetchProductRequest } from "../store/app/actions"

const Home: NextPage = ({ appData }: any) => {
    const {products}: any = appData

    const pending = useSelector(getPendingSelector)
    const error = useSelector(getErrorSelector)

    return (
        <Layout loading={pending} error={error}>
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
                        products.map((item: Product)=> <ProductItem productData={item} key={item?._id} />)
                    }
                </div>
            </div>
        </Layout>
    )
}


export const getServerSideProps = wrapper.getStaticProps((store: any) => async () => {
    //
    // check Data
    if (!store.getState()?.appData?.products?.length) {
        store.dispatch(fetchProductRequest())
        store.dispatch(END)
    }

    // await in saga
    await store.sagaTask.toPromise()
    return {props: store.getState()}
})

export default Home
