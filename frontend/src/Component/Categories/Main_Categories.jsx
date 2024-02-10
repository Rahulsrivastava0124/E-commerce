import React, { useEffect, useState } from 'react'
import NavbarContainer from '../../containers/NavbarContainer'
import Footer from '../Footer/Footer'
import { productsCategories } from '../../server/productAPI'
import { Link } from 'react-router-dom'


export default function Main_Categories() {
  const [Product_categories, setProduct_categories] = useState([])
  const CardColor = ["primary", "secondary", "success", "warning"]
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
                <div className="card ScaleButtonSmall" style={{ width: "18rem", height: "10rem" }} key={index}>
                  <Link to={`/Categories/${data.split(" ").join("")}`} className={`card-body nav-link rounded bg-${CardColor[index]}-subtle  d-flex align-items-center justify-content-center`} >
                    <h3 className={`text-capitalize text-${CardColor[index]}`}>{data}</h3>
                  </Link>
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
