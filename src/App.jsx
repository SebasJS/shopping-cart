import { useState } from 'react'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { CartProvider } from './context/cart'
import { useFilter } from './hooks/useFilter'
import { products as initialValue } from './mocks/products.json'

function App () {
  const [products] = useState(initialValue)
  const { filterProducts } = useFilter()
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(products)} />
      <Footer />
    </CartProvider>
  )
}

export default App
