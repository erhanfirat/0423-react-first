import { Redirect } from "react-router-dom";

const ProtectedPage = ({ pageComponent: PageComponent, from }) => {
  return localStorage.getItem("token") ? (
    <PageComponent />
  ) : (
    <Redirect to="/login" from={from} />
  );
};
export default ProtectedPage;
