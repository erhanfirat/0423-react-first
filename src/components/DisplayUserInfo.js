import { useEffect, useState } from "react";

const DisplayUserInfo = ({ userName, userNick, userAge }) => {
  const [showUserInfo, setShowUserInfo] = useState(true);

  return (
    <span>
      {userName} ({userNick}), {userAge}
    </span>
  );
};

export default DisplayUserInfo;
