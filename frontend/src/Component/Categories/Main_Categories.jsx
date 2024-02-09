import React, { useEffect, useState } from 'react'
import NavbarContainer from '../../containers/NavbarContainer'
import Footer from '../Footer/Footer'
import { productsCategories } from '../../server/productAPI'


export default function Main_Categories() {
  const [Product_categories, setProduct_categories] = useState([])
const CardColor =["primary-subtle", "secondary-subtle", "success-subtle", "warning-subtle"]
  useEffect(() => {
    async function getdata() {
      setProduct_categories(await productsCategories());
    }
    getdata();
  }, [])

  return (
    <>
      <NavbarContainer />
      <div className="container  mt-4">
        <h1>  Categories</h1>
        <div className="d-flex align-items-center flex-wrap mt-5 justify-content-between">
          {
            Product_categories.map((data, index) => {
              return (
                <div className="card ScaleButton" style={{ width: "18rem", height: "10rem" }} key={index}>
                  <div className={`card-body  bg-${CardColor[index]} d-flex align-items-center justify-content-center`}>
                    <h3 className='text-capitalize'>{data}</h3>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
      <Footer />
    </>
  )
}
