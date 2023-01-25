import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLogged, setLogged] = useState(false);
  return (
    <div className="header">
      <div className="header__left">
        <h3>Food Villa</h3>
      </div>
      <div className="header__right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </div>
      <div className="auth">
        {console.log(isLogged)}
        {isLogged ? (
          <button onClick={() => setLogged(false)}>Logout</button>
        ) : (
          <button onClick={() => setLogged(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
