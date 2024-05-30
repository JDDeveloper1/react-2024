import { useContext } from "react"
import { FiltersContext } from "../context/filters"

export function useFilters() {
  // The useContext hook allows you to access the context value.
  const { filters, setFilter } = useContext(FiltersContext)

  // The filterProducts function receives the products and returns a new array with the products that meet the filter criteria.
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilter }
}