import { useState } from "react";
const Header = () => {
  const [isLogged, setLogged] = useState(false);
  return (
    <div className="header">
      <div className="header__left">
        <h3>Food Villa</h3>
      </div>
      <div className="header__right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>help</li>
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
