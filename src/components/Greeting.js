import DisplayUserInfo from "./DisplayUserInfo";

const Greeting = ({ user, nickName = "Anonim", children }) => {
  // Object destructuring
  // const { user, age } = props;

  return (
    <h1>
      Merhaba{" "}
      <DisplayUserInfo
        userName={user.name}
        userAge={user.age}
        userNick={nickName}
      />
      <hr />
      {children}
    </h1>
  );
};

export default Greeting;
