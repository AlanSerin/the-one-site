import React from "react";
import Link from "next/link";
import Card from "../../../components/Card";
import Cardother from "../../../components/Cardother";
import styles from "../../../styles/Home.module.css";

const index = ({
  film,
  characternames,
  planetnames,
  speciesnames,
  shipnames,
  vehiclenames,
}) => {
  console.log(film);
  console.log(characternames);
  return (
    <>
      <h1>{film.result.properties.title}</h1>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=256"></img>
        <div className={styles.pointss}>
          <p>{film.result.properties.opening_crawl}</p>
        </div>
      </div>
      <h3>Characters</h3>
      <div className={styles.dflex}>
        {characternames.map((character, index) => (
          <Card
            key={index}
            info={character}
            image={
              "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256"
            }
          ></Card>
        ))}
      </div>
      <h3>Planets</h3>
      <div className={styles.dflex}>
        {planetnames.map((planet, index) => (
          <Cardother
            link="planet"
            key={index}
            info={planet}
            image={
              "https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=104%2C0%2C1072%2C536&width=256"
            }
          ></Cardother>
        ))}
      </div>
      {/* <h3>Species</h3>
      <div className={styles.dflex}>
        {speciesnames.map((species, index) => (
          <Cardother
            link="species"
            key={index}
            info={species}
            image={
              "https://lumiere-a.akamaihd.net/v1/images/wookiees-main-b_fc850c5b.jpeg?region=8%2C0%2C1543%2C868&width=256"
            }
          ></Cardother>
        ))}
      </div> */}
      <h3>Starships</h3>
      <div className={styles.dflex}>
        {shipnames.map((ship, index) => (
          <Cardother
            link="ship"
            key={index}
            info={ship}
            image={
              "https://lumiere-a.akamaihd.net/v1/images/X-Wing-Fighter_47c7c342.jpeg?region=0%2C96%2C1536%2C769&width=256"
            }
          ></Cardother>
        ))}
      </div>
      <h3>Vehicles</h3>
      <div className={styles.dflex}>
        {vehiclenames.map((vehicle, index) => (
          <Cardother
            link="vehicle"
            key={index}
            info={vehicle}
            image={
              "https://lumiere-a.akamaihd.net/v1/images/wookiee-catamaran_ae2deacf.jpeg?region=70%2C0%2C1181%2C665&width=256"
            }
          ></Cardother>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://www.swapi.tech/api/films/${context.params.id}`
  );
  const film = await res.json();
  // console.log(film + 'asdasdasdasdasdasdasdsd');

  let characterlinks = [];
  film.result.properties.characters.map((character) =>
    characterlinks.push(character)
  );
  let characternames = [];
  for (let i = 0; i < characterlinks.length; i++) {
    const res = await fetch(`${characterlinks[i]}`);
    const character = await res.json();
    characternames.push(character.result.properties.name);
  }

  let planetlinks = [];
  film.result.properties.planets.map((planet) => planetlinks.push(planet));
  let planetnames = [];
  for (let i = 0; i < planetlinks.length; i++) {
    const res = await fetch(`${planetlinks[i]}`);
    const planet = await res.json();
    planetnames.push([planet.result.properties.name, planet.result.uid]);
  }

  // let specieslinks = [];
  // film.result.properties.species.map((species) => specieslinks.push(species));
  // let speciesnames = [];
  // for (let i = 0; i < specieslinks.length; i++) {
  //   const res = await fetch(`${specieslinks[i]}`);
  //   const species = await res.json();
  //   speciesnames.push([species.result.properties.name, species.result.uid]);
  // }

  let shiplinks = [];
  film.result.properties.starships.map((starship) => shiplinks.push(starship));
  let shipnames = [];
  for (let i = 0; i < shiplinks.length; i++) {
    const res = await fetch(`${shiplinks[i]}`);
    const ship = await res.json();
    shipnames.push([ship.result.properties.name, ship.result.uid]);
  }

  let vehiclelinks = [];
  film.result.properties.vehicles.map((vehicle) => vehiclelinks.push(vehicle));
  let vehiclenames = [];
  for (let i = 0; i < vehiclelinks.length; i++) {
    const res = await fetch(`${vehiclelinks[i]}`);
    const vehicle = await res.json();
    vehiclenames.push([vehicle.result.properties.name, vehicle.result.uid]);
  }

  return {
    props: {
      film,
      characternames,
      planetnames,
      // speciesnames,
      shipnames,
      vehiclenames,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://www.swapi.tech/api/films/");

  const films = await res.json();

  const ids = films.result.map((film) => film.uid);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default index;
