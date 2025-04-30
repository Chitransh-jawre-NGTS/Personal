import React from 'react'
import Navbar from '../components/Navbar'
import CategoryNavbar from '../components/CatagoryNavbar'
import ProductDescription from '../components/ProductDescription'
import TopFilterBar from '../components/TopFilterBar'

const ProductDetails = () => {
  return (
    <>
     <Navbar/>
     <CategoryNavbar/>
     {/* <TopFilterBar/> */}
     <ProductDescription/> 
    </>
  )
}

export default ProductDetails
