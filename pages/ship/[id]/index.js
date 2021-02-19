import React from "react";
import styles from "../../../styles/Home.module.css";
const index = ({ ship }) => {
  return (
    <div>
      <h1>{ship.result.properties.name}</h1>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769&width=768"></img>
        <div className={styles.points}>
          <p>Starship Class: {ship.result.properties.starship_class}</p>
          <p>Manufacturer: {ship.result.properties.manufacturer}</p>
          <p>Cost In Credits: {ship.result.properties.cost_in_credits}</p>
          <p>Length: {ship.result.properties.length}</p>
          <p>Crew: {ship.result.properties.crew}</p>
        </div>
        <div className={styles.points}>
          <p>Passengers: {ship.result.properties.passengers}</p>
          <p>
            Max Atmosphering Speed:{" "}
            {ship.result.properties.max_atmosphering_speed}
          </p>
          <p>Hyperdrive Rating: {ship.result.properties.hyperdrive_rating}</p>
          <p>MGLT: {ship.result.properties.MGLT}</p>
          <p>Cargo Capacity: {ship.result.properties.cargo_capacity}</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://www.swapi.tech/api/starships/${context.params.id}`
  );

  const ship = await res.json();

  return {
    props: {
      ship,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://www.swapi.tech/api/starships/`);

  const ships = await res.json();

  const ids = ships.results.map((ship) => ship.uid);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default index;
