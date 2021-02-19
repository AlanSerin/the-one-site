import React from "react";
import Cardstandard from "../components/Cardstandard";
import styles from "../styles/Home.module.css";
const ships = ({ ships }) => {
  console.log(ships);
  return (
    <>
      <h1>Ships</h1>
      <div className={styles.dflex}>
        {ships.results.map((ship, index) => (
          <Cardstandard
            key={index}
            link="ship"
            info={ship.url.match(/\d/g)}
            name={ship.name}
            image="https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769&width=256"
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("https://swapi.dev/api/starships/");
  const ships = await res.json();

  return {
    props: {
      ships,
    },
  };
};

export default ships;
