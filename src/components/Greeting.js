import { useContext } from "react";
import DisplayUserInfo from "./DisplayUserInfo";
import { CounterContext } from "../context/CounterProvider";

const Greeting = ({ user, nickName = "Anonim", children }) => {
  // Object destructuring
  // const { user, age } = props;
  const counterContext = useContext(CounterContext);

  return (
    <>
      <h1>
        Merhaba{" "}
        <DisplayUserInfo
          userName={user.name}
          userAge={user.age}
          userNick={nickName}
        />
        <hr />
        <p>Context Counter: {counterContext.counter}</p>
      </h1>
      {children}
    </>
  );
};

export default Greeting;
