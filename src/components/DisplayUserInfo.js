const DisplayUserInfo = ({ userName, userNick, userAge }) => {
  return (
    <span>
      {userName} ({userNick}), {userAge}
    </span>
  );
};

export default DisplayUserInfo;
