//
// Products card
import React from "react"
import styles from "../styles/components/Product.module.sass"
import Image from "next/image"
import images from "../public/images"
import {Product} from "../types/globalTypes"
import {useRouter} from "next/router"

const ProductItem = ({ productData }: { productData: Product }) => {
    const router = useRouter()
    const {_id, title, price, category, description, createdBy, image} = productData

    const handelRouter = (url: string) => {
        router.push(url)
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
                    </span>
                    <div className={styles.rate}>
                        <div>
                            <div>
                                category:
                                <span>
                                    {category?.name}
                                </span>
                            </div>
                            <div>
                                <span>
                                   buy
                                </span>
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