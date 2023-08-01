import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'
import './Filters.css'

export const Filters = () => {
  const { filters, setFilters } = useFilter()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  console.log({
    minPriceFilterId,
    categoryFilterId
  })

  const handleChangeMinPrice = (event) => {
    setFilters(previousFilters => {
      return {
        ...previousFilters,
        minPrice: event.target.value
      }
    })
  }

  const handleChangeCategory = (event) => {
    setFilters(previousFilters => {
      return {
        ...previousFilters,
        category: event.target.value
      }
    })
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min={0}
          max={1000}
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor='category'>Categoria</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          value={filters.category}
        >
          <option value='all'>Todas</option>
          <option value='laptops'>portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
