import DisplayUserInfo from "./DisplayUserInfo";

const Greeting = ({ user, age, nickName = "Anonim" }) => {
  // Object destructuring
  // const { user, age } = props;

  return (
    <h1>
      Merhaba{" "}
      <DisplayUserInfo userName={user} userAge={age} userNick={nickName} />
    </h1>
  );
};

export default Greeting;
