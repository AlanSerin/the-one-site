import React from "react";
import styles from "../../styles/Home.module.css";
import Cardstandard from "../../components/Cardstandard";
const index = ({ character, homeworld }) => {
  console.log(character);
  console.log(homeworld);
  const actualcharacter = character.results[0];

  const movieswitch = (film, index) => {
    console.log(film.match(/\d/g));
    switch (film.match(/\d/g)[0]) {
      case "1":
        return (
          <Cardstandard
            key={index}
            link="film"
            info="1"
            name="A New Hope"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
      case "2":
        return (
          <Cardstandard
            key={index}
            link="film"
            info="2"
            name="The Empire Strikes Back"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
      case "3":
        return (
          <Cardstandard
            key={index}
            link="film"
            info="1"
            name="Return of the Jedi"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
      case "4":
        return (
          <Cardstandard
            key={index}
            link="film"
            info="1"
            name="The Phantom Menace"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
      case "5":
        return (
          <Cardstandard
            key={index}
            link="film"
            info="1"
            name="Attack of the Clones"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
      case "6":
        return (
          <Cardstandard
            key={index}
            link="film"
            info="1"
            name="Revenge of the Sith"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
      default:
        return (
          <Cardstandard
            key={index}
            link="film"
            info="1"
            name="A New Hope"
            image="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=128"
          />
        );
    }
  };

  // const actualcharacter = character.results[0];
  return (
    <div>
      <h1>{actualcharacter.name}</h1>
      <div className={styles.dflexspace}>
        <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=512"></img>
        <div className={styles.points}>
          <p>Height: {actualcharacter.height}</p>
          <p>Skin Color: {actualcharacter.skin_color}</p>
          <p>Gender: {actualcharacter.gender}</p>
          <p>Hair Color: {actualcharacter.hair_color}</p>
        </div>
        <div className={styles.points}>
          <p>Eye Color: {actualcharacter.eye_color}</p>
          <p>Mass: {actualcharacter.mass}</p>
          <p>DOB: {actualcharacter.birth_year}</p>
        </div>
      </div>
      <h2>Homeworld</h2>
      <div className={styles.dflex}>
        <Cardstandard
          link="planet"
          info={homeworld.url.match(/\d/g)}
          name={homeworld.name}
          image="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=104%2C0%2C1072%2C536&width=256"
        />
      </div>
      <h2>Movies</h2>
      <div className={styles.dflex}>
        {actualcharacter.films.map((film, index) => {
          return movieswitch(film, index);
        })}
      </div>
      {/* <p>{actualcharacter.gender}</p>
            <p>{actualcharacter.birth}</p> */}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://swapi.dev/api/people/?search=${context.params.name}`
  );

  const character = await res.json();

  const res1 = await fetch(character.results[0].homeworld);
  const homeworld = await res1.json();

  return {
    props: {
      character,
      homeworld,
    },
  };
};

export default index;
