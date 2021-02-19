import navStyles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import searchdata from "../searchdata";

const Navbar = () => {
  const [searchTerm, changeSearchTerm] = useState("");

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">The One Site</Link>
        </li>
        <li>
          <Link href="/films">Films</Link>
        </li>
        <li>
          <Link href="/characters">Characters</Link>
        </li>
        <li>
          <Link href="/planets">Planets</Link>
        </li>
        <li>
          <Link href="/ships">Ships</Link>
        </li>
        <li>
          <Link href="/vehicles">Vehicles</Link>
        </li>
      </ul>
      <div className={navStyles.searchbar && navStyles.dropdown}>
        <input
          type="text"
          onChange={(event) => changeSearchTerm(event.target.value)}
        ></input>
        <button>Search</button>
        <div className={navStyles.dropdowncontent}>
          {searchdata
            .filter((value) => {
              if (searchTerm.length < 2) {
                return null;
              } else if (
                value.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return value;
              }
            })
            .map((person, index) => {
              return (
                <Link
                  className={navStyles.dropdowncontent}
                  key={index}
                  href={`/character/${person}`}
                >
                  <a>
                    <p>{person}</p>
                  </a>
                </Link>
              );
            })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
