//
// Layout for all pages
//
import React, { useCallback, useEffect, useState } from "react"
import styles from "../styles/components/Layout.module.sass"
import toast from "./Toast"
import { useRouter } from "next/router"
import Loading from "./Loading"
import Navbar from "./Navbar"
import { LayoutDashboardProps, ToastMessageProps } from "../types/global"


// error handler
const Error = ({error, onRefresh}: { error: any, onRefresh: any }) => {
    const [errors, setErrors] = useState<string>('')

    // Stringify text error
    useEffect(() => {
        setErrors(JSON.stringify(error))
    }, [error])

    return (
        <div className={styles.errorPage}>
            <p>{errors}</p>
            {
                onRefresh ? (
                    <a className={styles.BtnRefresh} onClick={() => onRefresh()}>Refresh page</a>
                ) : ''
            }
        </div>
    )
}

// layout
const Layout = ({children, onRefresh, error, loading, setNotify}: LayoutDashboardProps) => {
    const router = useRouter()
    const [errorData, setErrorData] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(loading)

    // set notify
    const notify = useCallback((type: string, message: string) => {
        toast({type, message})
    }, []);

    useEffect(() => {
        if (setNotify === null || setNotify === undefined)
            return
        let {type, message}: ToastMessageProps = setNotify
        notify(type, message)
    }, [setNotify])


    // set loading
    useEffect(() => {
        setIsLoading(loading)
    }, [loading])

    // set errors
    useEffect(() => {
        switch (error?.response?.status) {
            // case 401:
            // case 400:
            default:
                setErrorData(error)
        }
    }, [error])

    // set page setting after load
    useEffect(() => {}, [])

    return (
        <div className={styles.AF_app}>
            <div className={styles.navbar}>
                <Navbar />
            </div>
            <div className={styles.mainContainer}>
                <main className={styles.main}>
                        {
                            isLoading ? (
                                // When Loading is true
                                <Loading />
                            ) : errorData ? (
                                // When page have error
                                <Error error={error} onRefresh={onRefresh} />
                            ) : (
                                // Show layout children
                                children
                            )
                        }
                </main>
            </div>
        </div>
    )
}

export default Layout
