import React from 'react';
import Card from '../components/Card';
import { server } from '../config';
import styles from '../styles/Home.module.css';
import data from '../data';
const characters = ({ characters }) => {
  console.log(characters);
  return (
    <div>
      <h1 className={styles.titletext}>Characters</h1>
      <h3 className={styles.subtitletext}>Humans</h3>
      <div className={styles.dflex}>
        {data[0].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Droids</h3>
      <div className={styles.dflex}>
        {data[1].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Wookie</h3>
      <div className={styles.dflex}>
        {data[2].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Rodian</h3>
      <div className={styles.dflex}>
        {data[3].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Hutt</h3>
      <div className={styles.dflex}>
        {data[4].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Yoda's species</h3>
      <div className={styles.dflex}>
        {data[5].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Trandoshan</h3>
      <div className={styles.dflex}>
        {data[6].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Mon Calamari</h3>
      <div className={styles.dflex}>
        {data[7].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
      <h3 className={styles.subtitletext}>Ewok</h3>
      <div className={styles.dflex}>
        {data[8].map((human, index) => (
          <Card
            key={index}
            info={human}
            image='https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=256'
          ></Card>
        ))}
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/characters/`);
//   const characters = await res.json();

//   return {
//     props: {
//       characters,
//     },
//   };
// };

// export const getStaticProps = async () => {
//     const res = await fetch('https://www.swapi.tech/api/species/');
//     const species = await res.json();

//     let humanlinks = [];
//     species.result[0].people.map(human => (
//         humanlinks.push(human)
//     ))
//     let humannames = [];
//     for(let i = 0; i < humanlinks.length; i++){
//         const res= await fetch (`${humanlinks[i]}`);
//         const human = await res.json();
//         humannames.push(human.result.properties.name)
//     }

//     return {
//       props: {
//         species
//       }
//     }
// }

export default characters;
