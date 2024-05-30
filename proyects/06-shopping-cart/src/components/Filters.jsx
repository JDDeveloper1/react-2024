import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

function Filters() {
  const { filters, setFilter } = useFilters()


  const minPriceId = useId('')
  const maxPriceId = useId('')// useId es un hook que genera un id único
  const categoryId = useId('')




  const handleChangeMinPrice = (event) => {
    setFilter(prevState => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  const handleChangeMaxPrice = (event) => {
    setFilter(prevState => ({
      ...prevState,
      maxPrice: Number(event.target.value)
    }))
  }

  const handleChangeCategory = (event) => {
    setFilter(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceId}>Precio a partir de:</label>
        <input type="range"
          id={minPriceId}
          name="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
        <label htmlFor={maxPriceId}>Precio a hasta de:</label>
        <input type="range"
          id={maxPriceId}
          name="price"
          min="0"
          max="1000"
          onChange={handleChangeMaxPrice}
          value={filters.maxPrice}
        />
        <span>${filters.maxPrice}</span>
      </div>



      <div >
        <label htmlFor={categoryId}>Categoría:</label>
        <select name="category" id={categoryId} onChange={handleChangeCategory} >
          <option value="all">Todos</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}

export default Filters