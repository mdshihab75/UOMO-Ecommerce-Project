import React from 'react'
import Container from '../ui/Container'
import Product from '../Common/Product'

const AllProducts = ({items, view}) => {
  return (
    <section>
        <Container>
            <div style={{ gridTemplateColumns : `${view  == 2 ? "1fr 1fr" : view == 3 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}`}} className={`grid gap-x-7.5 gap-y-15`}>
                {
                items?.map((item) => (
                    <Product item={item}/>
                ))
            }
            </div>
        </Container>
    </section>
  )
}

export default AllProducts