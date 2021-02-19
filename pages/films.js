import styles from "../styles/Home.module.css";
import Link from "next/link";

const films = ({ films }) => {
  return (
    <>
      <h1>Movies</h1>
      <div className={styles.dflex}>
        {films.result.map((film, index) => (
          <Link
            key={index}
            href="/film/[id]"
            as={`/film/${parseInt(film.uid)}`}
          >
            <a>
              <div className={styles.card}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=256"></img>
                <p>{film.properties.title}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

{
  /* <Link href = '/film/[name]' as = {`/film/${film.properties.title}`>
                    <div key={index} className= {styles.card}>
                        <img src='https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg?region=49%2C43%2C580%2C914&width=256'></img>
                        <p>{film.properties.title}</p>
                    </div>
                </Link> */
}

export const getStaticProps = async () => {
  const res = await fetch("https://www.swapi.tech/api/films/");
  const films = await res.json();

  return {
    props: {
      films,
    },
  };
};

export default films;
