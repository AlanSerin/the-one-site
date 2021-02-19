import React from "react";
import Cardstandard from "../components/Cardstandard";
import styles from "../styles/Home.module.css";
const vehicles = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <>
      <h1>Ships</h1>
      <div className={styles.dflex}>
        {vehicles.results.map((vehicle, index) => (
          <Cardstandard
            key={index}
            link="vehicle"
            info={vehicle.url.match(/\d/g)}
            name={vehicle.name}
            image="https://lumiere-a.akamaihd.net/v1/images/wookiee-catamaran_ae2deacf.jpeg?region=70%2C0%2C1181%2C665&width=256"
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("https://swapi.dev/api/vehicles/");
  const vehicles = await res.json();

  return {
    props: {
      vehicles,
    },
  };
};

export default vehicles;
