import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { addToBasket } from '../../shared/store/actions/cart.actions'
import { Loading } from '../../shared/components'

import { ProductListWrapper, ProductCardListWrapper, PaginateWrapper, Title } from './styles'
import { ProductCard, ProductTypeList, Pagination } from './components'

const ProductList = () => {
  const { products } = useSelector(state => state);
  const dispatch = useDispatch()

  const noItemFound = () => {
    const result = Object.values(products.filters)
      .some(value => value.length >= 1 && !value.includes(0))
    return result
  }

  return (
    <ProductListWrapper>
      <Title>Products</Title>
      <ProductTypeList {...products} />
      <ProductCardListWrapper {...products}>
        {!products.currentList.length ? <Loading noItem={noItemFound()} /> :
          products.currentList.map((item, index) => (
            <ProductCard
              {...{ index, ...item }}
              key={item.slug}
              onClick={() => dispatch(addToBasket(item))} />
          ))
        }
      </ProductCardListWrapper>
      <Pagination {...products} />
      <PaginateWrapper>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel="..."
          breakClassName="dots"
          activeClassName="active"
          containerClassName="pagination"
          pageCount={190}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={(e) => console.log("onPageChange", e)}
        />
      </PaginateWrapper>
    </ProductListWrapper>
  )
}

export default ProductList
