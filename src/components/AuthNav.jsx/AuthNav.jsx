import { Link } from "react-router-dom";

const AuthNav = () => {
    return (
      <>
        <Link to="/register">Register</Link>
        <Link to="/signin">SignIn</Link>
      </>
    );
};

export default AuthNav;
