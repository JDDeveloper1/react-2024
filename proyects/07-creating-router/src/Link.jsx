import { BUTTON, EVENTS } from './const'

export function navigateTo(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}
// ancore tag, es un componente que recibe una prop to. un target y un props que es un objeto con todas las propiedades que se le quieran pasar al tag a  que se renderiza en el DOM
export function Link({ resetScroll, target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTON.PRIMARY // primary click
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey // cmd/ctrl + click
    const isManageableEvent = target === '_self' || target === undefined // target attribute values that are manageable by the browser

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigateTo(to) // navegación con SPA
      resetScroll && window.scrollTo(0, 0) // scroll to top
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
