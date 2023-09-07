import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>
        <h1>Products Detail Page</h1>
      </div>

      <nav>
          <Link to="jeans">Jeans</Link>
          <Link to="shirts">Shirts</Link>
          <Link to="shoes">Shoes</Link>
      </nav>

      <Outlet />

    </>
  )
}

export default Products
