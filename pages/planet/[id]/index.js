import React from "react";
import styles from "../../../styles/Home.module.css";
const index = ({ planet }) => {
  return (
    <div>
      <h1>{planet.result.properties.name}</h1>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=104%2C0%2C1072%2C536&width=768"></img>
        <div className={styles.points}>
          <p>Diameter: {planet.result.properties.diameter}</p>
          <p>Rotational Period: {planet.result.properties.diameter}</p>
          <p>Orbital Period: {planet.result.properties.orbital_period}</p>
          <p>Gravity: {planet.result.properties.gravity}</p>
        </div>
        <div className={styles.points}>
          <p>Population: {planet.result.properties.population}</p>
          <p>Climate: {planet.result.properties.climate}</p>
          <p>Terrain: {planet.result.properties.terrain}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://www.swapi.tech/api/planets/${context.params.id}`
  );

  const planet = await res.json();

  return {
    props: {
      planet,
    },
  };
};

export default index;
