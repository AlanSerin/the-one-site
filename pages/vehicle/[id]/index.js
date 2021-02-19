import React from "react";
import styles from "../../../styles/Home.module.css";
const index = ({ vehicle }) => {
  return (
    <div>
      <h1>{vehicle.result.properties.model}</h1>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/wookiee-catamaran_ae2deacf.jpeg?region=70%2C0%2C1181%2C665&width=768"></img>
        <div className={styles.points}>
          <p>Vehicle Class: {vehicle.result.properties.vehicle_class}</p>
          <p>Manufacturer: {vehicle.result.properties.manufacturer}</p>
          <p>Cost In Credits: {vehicle.result.properties.cost_in_credits}</p>
          <p>Length: {vehicle.result.properties.length}</p>
        </div>
        <div className={styles.points}>
          <p>Crew: {vehicle.result.properties.crew}</p>
          <p>Passengers: {vehicle.result.properties.passengers}</p>
          <p>
            Max Atmosphering Speed:{" "}
            {vehicle.result.properties.max_atmosphering_speed}
          </p>
          <p>Cargo Capacity: {vehicle.result.properties.cargo_capacity}</p>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://www.swapi.tech/api/vehicles/${context.params.id}`
  );

  const vehicle = await res.json();

  return {
    props: {
      vehicle,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://www.swapi.tech/api/vehicles/`);

  const vehicles = await res.json();

  const ids = vehicles.results.map((vehicle) => vehicle.uid);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default index;
