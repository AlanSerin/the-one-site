import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ character, planet, vehicle }) {
  console.log(character);
  console.log(planet);
  console.log(vehicle);
  const actualcharacter = character.result.properties;
  const actualplanet = planet.result.properties;
  const actualvehicle = vehicle.result.properties;
  return (
    <>
      <h1>Featured Character</h1>
      <h3>{actualcharacter.name}</h3>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=512"></img>
        <div className={styles.points}>
          <p>Hair Color: {actualcharacter.hair_color}</p>
          <p>Eye Color: {actualcharacter.eye_color}</p>
          <p>Mass: {actualcharacter.mass}</p>
          <p>DOB: {actualcharacter.birth_year}</p>
        </div>
        <div className={styles.points}>
          <p>Height: {actualcharacter.height}</p>
          <p>Skin Color: {actualcharacter.skin_color}</p>
          <p>Gender: {actualcharacter.gender}</p>
        </div>
      </div>
      <h1>Featured Planet</h1>
      <h3>{actualplanet.name}</h3>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=104%2C0%2C1072%2C536&width=512"></img>
        <div className={styles.points}>
          <p>Diameter: {actualplanet.diameter}</p>
          <p>Rotational Period: {actualplanet.diameter}</p>
          <p>Orbital Period: {actualplanet.orbital_period}</p>
          <p>Gravity: {actualplanet.gravity}</p>
        </div>
        <div className={styles.points}>
          <p>Population: {actualplanet.population}</p>
          <p>Climate: {actualplanet.climate}</p>
          <p>Terrain: {actualplanet.terrain}</p>
        </div>
      </div>
      <h1>Featured Vehicle</h1>
      <h3>{actualvehicle.model}</h3>
      <div className={styles.dflex}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/wookiee-catamaran_ae2deacf.jpeg?region=70%2C0%2C1181%2C665&width=512"></img>
        <div className={styles.points}>
          <p>Vehicle Class: {actualvehicle.vehicle_class}</p>
          <p>Manufacturer: {actualvehicle.manufacturer}</p>
          <p>Cost In Credits: {actualvehicle.cost_in_credits}</p>
          <p>Length: {actualvehicle.length}</p>
        </div>
        <div className={styles.points}>
          <p>Crew: {actualvehicle.crew}</p>
          <p>Passengers: {actualvehicle.passengers}</p>
          <p>Max Atmosphering Speed: {actualvehicle.max_atmosphering_speed}</p>
          <p>Cargo Capacity: {actualvehicle.cargo_capacity}</p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://www.swapi.tech/api/people/1`);
  const character = await res.json();

  const res1 = await fetch(`https://www.swapi.tech/api/planets/5`);
  const planet = await res1.json();

  const res2 = await fetch(`https://www.swapi.tech/api/vehicles/14`);
  const vehicle = await res2.json();

  return {
    props: {
      character,
      planet,
      vehicle,
    },
  };
};
