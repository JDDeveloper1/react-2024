import { createContext, useMemo, useState } from "react";


//1. Crear el contexto
export const FiltersContext = createContext();

//2. Crear el provider, que es un componente que envuelve a otros componentes y les proporciona el contexto
export function FiltersProvider({ children }) {
  //3. Crear el estado que se va a compartir  podemos usarlo con el hook useMemo para que solo se cree una vez o con un useState si el estado va a cambiar
  // const filters = useMemo(() => ({
  //   category: 'all',
  //   minPrice: 0,
  //   maxPrice: 1000,
  // }), []);

  const [filters, setFilter] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 1000,
  });


  //4. Retornar el provider con el valor del estado que se va a compartir
  return useMemo(() => (
    <FiltersContext.Provider value={{ filters, setFilter }}>{children}</FiltersContext.Provider>
  ), [filters, setFilter, children]);
}