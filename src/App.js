import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { Header, Panes, ProductList, BasketSummary } from './components'
import { Container } from './styles'

import { getProducts } from './shared/store/product/product.actions'
import { getManufacturers } from './shared/store/manufacturer/manufacturer.actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getManufacturers())
  })

  return (
    <div className="App">
      <Header />
      <Container>
        <Panes />
        <ProductList  />
        <BasketSummary />
      </Container>
    </div>
  );
}

export default App;
