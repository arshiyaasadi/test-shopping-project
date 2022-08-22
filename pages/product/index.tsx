//
// Product page
import React, {useEffect} from "react"
import type {NextPage} from 'next'
import {useRouter} from "next/router"

const Product: NextPage = () => {
    const router = useRouter()

    useEffect(()=> {
        // If don't have Product id,
        // push to home page
        router.push('/')
    }, [])

    return (
        <></>
    )
}

export default Product
