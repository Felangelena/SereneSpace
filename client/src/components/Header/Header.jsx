import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className={styles.logo}>
            <img className={styles.logo__img} src={logo} />
            <div className={styles.logo__txt}>
              Serene <br /> Space
            </div>
          </h1>
        </Link>

        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-50 hover:text-violet-500 transition duration-300">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-50 hover:text-violet-500 transition duration-300">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline text-slate-50 hover:text-violet-500 transition duration-300">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
