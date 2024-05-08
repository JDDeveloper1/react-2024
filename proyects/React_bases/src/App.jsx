//CSS
import "./App.css";
//Components
import TwiitterFollowCard from "./TwiitterFollowCard";
//States
// import { useState } from "react";

function App() {
  // const initialName = "midudev";
  // const [name, setName] = useState(initialName);
  // const [isInitialName, setIsInitialName] = useState(true);

  // const toggleName = () => {
  //   if (isInitialName) {
  //     setName("pedromichel");
  //   } else {
  //     setName(initialName);
  //   }
  //   setIsInitialName(!isInitialName);
  // };

  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      isFollowing: true,
    },
    {
      userName: "pheralb",
      name: "Pablo Hernandez",
      isFollowing: false,
    },
    {
      userName: "paris",
      name: "Paris Hilton",
      isFollowing: false,
    },
  ];

  return (
    <section className="app">
      {/* <TwiitterFollowCard userName={name} initialIsFollowing={true}>
        <strong> Miguel Angel Duran</strong>
      </TwiitterFollowCard>

      <TwiitterFollowCard userName="pheralb">
        <strong>Pablo Hernandez</strong>
      </TwiitterFollowCard> */}
      {/* 
      <button onClick={toggleName}>Cambiar nombre</button> */}

      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwiitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwiitterFollowCard>
        );
      })}
    </section>
  );
}

export default App;
