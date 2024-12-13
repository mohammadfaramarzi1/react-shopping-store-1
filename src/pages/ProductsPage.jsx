import React from 'react'
import SearchBox from '../components/templates/SearchBox'
import ProductsBox from '../components/templates/ProductsBox'

function ProductsPage() {
  return (
    <div className='p-12'>
      <div>
        <SearchBox />
      </div>
      <div>
        <div className='grid grid-cols-3 gap-3'>
          <ProductsBox />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductsPage