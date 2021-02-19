import React from 'react'

const index = ({species}) => {
    return (
        <div>
            <h1>{species.result.properties.name}</h1>
            <img src='https://lumiere-a.akamaihd.net/v1/images/wookiees-main-b_fc850c5b.jpeg?region=8%2C0%2C1543%2C868&width=768'></img>
            <p>Classification: {species.result.properties.classification}</p>
            <p>Designation: {species.result.properties.designation}</p>
            <p>Average Height: {species.result.properties.average_height}</p>
            <p>Average Lifespan: {species.result.properties.average_lifespan}</p>
            <p>Hair Colors: {species.result.properties.hair_colors}</p>
            <p>Skin Colors: {species.result.properties.skin_colors}</p>
            <p>Eye Colors: {species.result.properties.eye_colors}</p>
            <p>Language: {species.result.properties.language}</p>
            <div>
                <h3>People</h3>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res= await fetch (`https://www.swapi.tech/api/species/${context.params.id}`)

    const species= await res.json()

    return {
        props : {
            species
        }
    }
}

export const getStaticPaths = async () => {
    const res= await fetch (`https://www.swapi.tech/api/species/`)

    const species= await res.json()

    const ids = species.results.map(specie => specie.uid)
    const paths = ids.map(id => ({params:{id: id.toString()}}))

    return {
        paths,
        fallback:false
    }
}

export default index