import React from "react";
import Cardstandard from "../components/Cardstandard";
import styles from "../styles/Home.module.css";
const planets = ({ planets }) => {
  console.log(planets);
  return (
    <>
      <h1>Planets</h1>
      <div className={styles.dflex}>
        {planets.results.map((planet, index) => (
          <Cardstandard
            key={index}
            link="planet"
            info={planet.url.match(/\d/g)}
            name={planet.name}
            image="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=104%2C0%2C1072%2C536&width=256"
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch("https://swapi.dev/api/planets/");
  const planets = await res.json();

  return {
    props: {
      planets,
    },
  };
};

export default planets;
