import { Link } from "react-router-dom";
export default function Navbar(props) {
    return (
      <div className="nav">
        <Link to="/">
          <div>{props.homeText || 'CRYPTO PRICES'}</div>
        </Link>
        <Link to="/currencies">
          <div>{props.currenciesText || 'CURRENCIES'}</div>
        </Link>
      </div>
    );
  }
  