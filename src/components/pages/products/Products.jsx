import React, { useState } from 'react'
import laptopPic from "../../../assets/pictures/laptop1.jpg"
import CustomBtn from '../../custom/customBtn/CustomBtn'

export default function Products() {

    const [products, setProducts] = useState([])



    function getProducts() {
        import("./productList")
            .then(module => {
                setProducts(module.default)
            })
    }


    return (
        <div className='products'>
            <div className='wrapper-max'>
                <div>
                    <CustomBtn action={getProducts} content={"نمایش محصولات (code splitting)"} />
                </div>
                <div className='w-100 '>
                    {products.length !== 0
                        ?
                        <div className='row'>
                            {
                                products.map((product, index) =>
                                    <div className='col-md-4 mt-3'>
                                        <div class="card" style={{ width: "18rem", backgroundColor: "#101314", color: "white" }}>
                                            <img className="card-img-top" src={laptopPic} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.name}</h5>
                                                <p className="card-text">{product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        :
                        <div className='w-100 d-flex justify-content-center mt-5'>
                            <h3>نمایش محصولات را کلیک کنید</h3>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}