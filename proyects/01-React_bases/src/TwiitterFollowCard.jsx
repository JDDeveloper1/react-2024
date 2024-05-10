import { useState } from "react";

/* Que son los estados en react?
Los estados son variables que se pueden modificar en un componente, y que al modificarlos, react se encarga de renderizar de nuevo el componente.
Los estados se definen con el hook useState, y se pueden modificar con la funcion que devuelve el hook.
Los estados solo se pueden definir en componentes funcionales, no en componentes de clase.
Un ejemplo de ello seria la siguiente implementacion:
*/

/* Qué son los Hooks en React?
  Los hooks son funciones que permiten a los componentes funcionales tener características 
  de los componentes de clase esto nos ayuda nutrir de más funcionalidades a los componentes funcionales.
*/

function TwiitterFollowCard({
  children,
  // formattedUserName,
  userName,
  initialIsFollowing,
  // name,
  // isFollowing,
}) {
  //STATES
  /* Destructuracion: esto nos permite que sea mas legible y ocupe menos lineas de codigo*/
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  // const state = useState(false);
  // const isFollowing = state[0];
  // const setIsFollowing = state[1];

  // las props son  inmutables no se pueden modificar, siempre debe crear las variables para modificarlas

  const imageSrc = `https://unavatar.io/${userName}`;

  // Renderizado condicional para mostrar el boton de seguir o siguiendo
  const buttonText = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  //Funcion para cambiar el estado de isFollowing con onClick de la etiqueta button
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  /* console.log(isFollowing);*/

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-img" src={imageSrc} alt="omidnikrah" />
        <div className="tw-followCard-info">
          {/* //<strong>{name}</strong> */}
          {/*esto seria conocido como children  */}
          {children}
          {/* <span className="tw-followCard-text">{formatUSerName(userName)}</span> // pasar funcion  */}
          {/* <span className="tw-followCard-text">{formattedUserName}</span> // pasar elemeento  */}
          <span className="tw-followCard-text">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={btnClassName} onClick={handleClick}>
         <span className="tw-followCard-text"> {buttonText}</span>
          <span className="tw-followCard-stopFollow">dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export default TwiitterFollowCard;
