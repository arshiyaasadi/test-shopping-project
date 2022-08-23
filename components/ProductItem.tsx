//
// Products card
import React, {useEffect, useState} from "react"
import styles from "../styles/components/Product.module.sass"
import Image from "next/image"
import images from "../public/images"
import {Cart, Product} from "../types/globalTypes"
import {useRouter} from "next/router"

// redux
import {useDispatch, useSelector} from "react-redux"
import { fetchCartItem } from "../store/app/actions"
import {getCartSelector} from "../store/app/selectors";

const ProductItem = ({ productData }: { productData: Product }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const cart = useSelector(getCartSelector)
    const {_id, title, price, category, description, createdBy, image} = productData

    // link handler
    const handelRouter = (url: string) => {
        router.push(url)
    }

    // Check exist item in cart
    const isProductInCart = () => {
        return cart.find((item: Cart) => item._id === _id)
    }

    // Add or remove Item from cart in redux
    const changeCartItemStatus = (number: number, product: Product | any) =>{
        dispatch(fetchCartItem({number, product}))
    }


    return (
        <div key={_id} className={styles.cardContainer}>
            {/*
            *** Header
            */}
            <div className={styles.cardImage}>
                {/*
                *** Image
                */}
                <span className={styles.cardCover}>
                    {
                        image ? (
                            <img src={image} alt={"product"} />
                        ) : (
                            // Show default app image
                            <Image src={images.product} alt={`item: ${title}`} />
                        )
                    }
                </span>

                {/*
                *** Information
                */}
                <div className={styles.productInfo}
                     onClick={()=> handelRouter(`/product/${_id}`)}>
                    <div>
                        <span>
                            {
                                image ? (
                                    <Image src={image} alt={`item: ${title}`} />
                                ) : (
                                    // Show default app image
                                    <Image src={images.product} alt={`item: ${title}`} />
                                )
                            }
                        </span>
                        <div>
                            <h4>{title}</h4>
                            <p>{createdBy?.name}</p>
                        </div>
                    </div>

                </div>
            </div>

            {/*
            *** Description
            */}
            <div>
                <p>{title}</p>
                <div>
                    <span>
                        {description}
                        <div>
                                category:
                                <span>
                                    {category?.name}
                                </span>
                            </div>
                    </span>
                    <div className={styles.rate}>
                        <div>
                            <div className={styles.buyBtn}>
                                    {
                                        isProductInCart() ? (
                                            <>
                                                <span onClick={()=> changeCartItemStatus(-1, productData)}>-</span>
                                                <span>{isProductInCart()?.number}</span>
                                                <span onClick={()=> changeCartItemStatus(+1, productData)}>+</span>
                                            </>
                                        ) : (
                                            <span onClick={()=> changeCartItemStatus(+1, productData)}>
                                                Buy
                                            </span>
                                        )
                                    }
                            </div>
                        </div>
                        <div>
                            <span>
                                {price}
                            </span>$
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem